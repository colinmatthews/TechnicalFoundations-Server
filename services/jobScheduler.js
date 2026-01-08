const cron = require('node-cron');
const RocketJobsScraper = require('./rocketJobsScraper');
const EmailService = require('./emailService');
const fs = require('fs').promises;
const path = require('path');

/**
 * Job Scheduler for daily job scraping and email alerts
 */
class JobScheduler {
  constructor() {
    this.scraper = new RocketJobsScraper();
    this.emailService = new EmailService();
    this.scheduledTask = null;
    this.isRunning = false;
    this.lastRun = null;
    this.jobHistoryFile = path.join(__dirname, '../data/job-history.json');

    // Ensure data directory exists
    this.ensureDataDirectory();
  }

  /**
   * Ensure data directory exists
   */
  async ensureDataDirectory() {
    const dataDir = path.join(__dirname, '../data');
    try {
      await fs.mkdir(dataDir, { recursive: true });
    } catch (error) {
      console.error('Error creating data directory:', error.message);
    }
  }

  /**
   * Start the scheduler
   * Default: runs daily at 9:00 AM
   * Can be customized via CRON_SCHEDULE environment variable
   */
  start() {
    // Default: Every day at 9:00 AM (0 9 * * *)
    // Format: minute hour day month dayOfWeek
    const cronSchedule = process.env.CRON_SCHEDULE || '0 9 * * *';

    if (this.scheduledTask) {
      console.log('Scheduler is already running.');
      return;
    }

    // Validate cron expression
    if (!cron.validate(cronSchedule)) {
      console.error(`Invalid cron schedule: ${cronSchedule}`);
      return;
    }

    this.scheduledTask = cron.schedule(cronSchedule, async () => {
      console.log(`\n[${ new Date().toISOString()}] Running scheduled job scraping...`);
      await this.runJobScraping();
    });

    console.log(`Job scheduler started. Running daily at: ${cronSchedule}`);
    console.log('Next execution:', this.getNextExecutionTime(cronSchedule));
  }

  /**
   * Stop the scheduler
   */
  stop() {
    if (this.scheduledTask) {
      this.scheduledTask.stop();
      this.scheduledTask = null;
      console.log('Job scheduler stopped.');
    } else {
      console.log('Scheduler is not running.');
    }
  }

  /**
   * Run job scraping and send email alert
   * @returns {Promise<Object>} Result object
   */
  async runJobScraping() {
    if (this.isRunning) {
      console.log('Job scraping is already in progress.');
      return { success: false, message: 'Already running' };
    }

    this.isRunning = true;
    const startTime = new Date();

    try {
      console.log('Starting job scraping...');

      // Scrape jobs
      const jobs = await this.scraper.scrapeJobs();
      console.log(`Found ${jobs.length} job(s)`);

      // Load job history
      const previousJobs = await this.loadJobHistory();

      // Filter out jobs we've already sent
      const newJobs = this.filterNewJobs(jobs, previousJobs);
      console.log(`${newJobs.length} new job(s) not previously sent`);

      let emailResult = null;

      // Send email if there are new jobs
      if (newJobs.length > 0) {
        console.log('Sending email alert...');
        emailResult = await this.emailService.sendJobAlert(newJobs);

        // Save job history
        await this.saveJobHistory([...previousJobs, ...newJobs]);
      } else {
        console.log('No new jobs to send.');
      }

      const endTime = new Date();
      const duration = (endTime - startTime) / 1000;

      this.lastRun = {
        timestamp: startTime.toISOString(),
        duration: `${duration}s`,
        totalJobs: jobs.length,
        newJobs: newJobs.length,
        emailSent: newJobs.length > 0,
        success: true
      };

      console.log(`Job scraping completed in ${duration}s`);

      return {
        success: true,
        totalJobs: jobs.length,
        newJobs: newJobs.length,
        emailSent: newJobs.length > 0,
        jobs: newJobs,
        emailResult
      };
    } catch (error) {
      console.error('Error during job scraping:', error.message);

      this.lastRun = {
        timestamp: startTime.toISOString(),
        success: false,
        error: error.message
      };

      return {
        success: false,
        error: error.message
      };
    } finally {
      this.isRunning = false;
    }
  }

  /**
   * Load job history from file
   * @returns {Promise<Array>} Array of previously sent jobs
   */
  async loadJobHistory() {
    try {
      const data = await fs.readFile(this.jobHistoryFile, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      // File doesn't exist or is invalid, return empty array
      return [];
    }
  }

  /**
   * Save job history to file
   * @param {Array} jobs - Array of jobs
   */
  async saveJobHistory(jobs) {
    try {
      // Keep only last 1000 jobs to prevent file from growing too large
      const jobsToSave = jobs.slice(-1000);
      await fs.writeFile(this.jobHistoryFile, JSON.stringify(jobsToSave, null, 2));
      console.log(`Saved ${jobsToSave.length} jobs to history`);
    } catch (error) {
      console.error('Error saving job history:', error.message);
    }
  }

  /**
   * Filter new jobs that haven't been sent before
   * @param {Array} currentJobs - Current scraped jobs
   * @param {Array} previousJobs - Previously sent jobs
   * @returns {Array} New jobs
   */
  filterNewJobs(currentJobs, previousJobs) {
    const previousLinks = new Set(previousJobs.map(job => job.link));
    return currentJobs.filter(job => !previousLinks.has(job.link));
  }

  /**
   * Get next execution time for cron schedule
   * @param {string} cronSchedule - Cron schedule expression
   * @returns {string} Next execution time
   */
  getNextExecutionTime(cronSchedule) {
    // Simple approximation - for production use a proper cron parser
    const now = new Date();
    const [minute, hour] = cronSchedule.split(' ');

    if (minute !== '*' && hour !== '*') {
      const nextRun = new Date(now);
      nextRun.setHours(parseInt(hour));
      nextRun.setMinutes(parseInt(minute));
      nextRun.setSeconds(0);

      // If time has passed today, set to tomorrow
      if (nextRun <= now) {
        nextRun.setDate(nextRun.getDate() + 1);
      }

      return nextRun.toLocaleString('pl-PL');
    }

    return 'Based on cron schedule: ' + cronSchedule;
  }

  /**
   * Get scheduler status
   * @returns {Object} Status object
   */
  getStatus() {
    return {
      running: this.scheduledTask !== null,
      isExecuting: this.isRunning,
      cronSchedule: process.env.CRON_SCHEDULE || '0 9 * * *',
      lastRun: this.lastRun,
      nextRun: this.scheduledTask ? this.getNextExecutionTime(process.env.CRON_SCHEDULE || '0 9 * * *') : null
    };
  }
}

module.exports = JobScheduler;
