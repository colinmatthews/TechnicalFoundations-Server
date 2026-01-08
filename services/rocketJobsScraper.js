const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Job Scraper for RocketJobs.pl
 * Scrapes marketing-related job positions
 */
class RocketJobsScraper {
  constructor() {
    this.baseUrl = 'https://rocketjobs.pl';
    this.targetPositions = [
      'Marketing Specialist',
      'Marketing Manager',
      'Brand Specialist',
      'Brand Manager'
    ];
    this.searchKeywords = ['marketing', 'brand'];
  }

  /**
   * Fetch jobs from RocketJobs.pl
   * @returns {Promise<Array>} Array of job objects
   */
  async scrapeJobs() {
    const allJobs = [];

    try {
      // Try multiple search approaches
      for (const keyword of this.searchKeywords) {
        const jobs = await this.searchByKeyword(keyword);
        allJobs.push(...jobs);
      }

      // Remove duplicates based on job URL
      const uniqueJobs = this.removeDuplicates(allJobs);

      // Filter for target positions
      const filteredJobs = this.filterByPosition(uniqueJobs);

      console.log(`Found ${filteredJobs.length} relevant job(s) for marketing positions`);
      return filteredJobs;
    } catch (error) {
      console.error('Error scraping jobs:', error.message);
      throw error;
    }
  }

  /**
   * Search jobs by keyword
   * @param {string} keyword - Search keyword
   * @returns {Promise<Array>} Array of job objects
   */
  async searchByKeyword(keyword) {
    const searchUrl = `${this.baseUrl}/oferty-pracy?search=${encodeURIComponent(keyword)}`;

    try {
      console.log(`Searching for: ${keyword}`);
      const response = await axios.get(searchUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7',
        },
        timeout: 10000
      });

      const $ = cheerio.load(response.data);
      const jobs = [];

      // Try to find job listings - adjust selectors based on actual site structure
      // Common patterns for job boards
      const selectors = [
        '.job-card',
        '.offer-card',
        'article[data-job-id]',
        '[class*="job"]',
        '[class*="offer"]',
        'a[href*="/oferta/"]',
        'a[href*="/job/"]'
      ];

      let foundElements = false;
      for (const selector of selectors) {
        const elements = $(selector);
        if (elements.length > 0) {
          foundElements = true;
          console.log(`Found ${elements.length} job(s) using selector: ${selector}`);

          elements.each((index, element) => {
            const job = this.extractJobInfo($, element);
            if (job) {
              jobs.push(job);
            }
          });

          if (jobs.length > 0) break;
        }
      }

      // If no jobs found with selectors, try to find links with job-related paths
      if (!foundElements || jobs.length === 0) {
        console.log('Trying alternative scraping method...');
        $('a').each((index, element) => {
          const href = $(element).attr('href');
          if (href && (href.includes('/oferta/') || href.includes('/job/'))) {
            const job = this.extractJobFromLink($, element);
            if (job) {
              jobs.push(job);
            }
          }
        });
      }

      return jobs;
    } catch (error) {
      if (error.response) {
        console.error(`HTTP Error ${error.response.status} for keyword "${keyword}"`);
      } else if (error.code === 'ENOTFOUND') {
        console.error('Unable to reach rocketjobs.pl - DNS error');
      } else {
        console.error(`Error searching for "${keyword}":`, error.message);
      }
      return [];
    }
  }

  /**
   * Extract job information from element
   * @param {CheerioStatic} $ - Cheerio instance
   * @param {CheerioElement} element - Job element
   * @returns {Object|null} Job object or null
   */
  extractJobInfo($, element) {
    try {
      const $el = $(element);

      // Try to find job title
      const title = $el.find('h2, h3, .job-title, [class*="title"]').first().text().trim() ||
                   $el.attr('title') ||
                   $el.text().trim();

      // Try to find job link
      const link = $el.attr('href') || $el.find('a').first().attr('href');
      const fullLink = link ? (link.startsWith('http') ? link : `${this.baseUrl}${link}`) : null;

      // Try to find company name
      const company = $el.find('.company, [class*="company"]').first().text().trim() || 'Unknown';

      // Try to find location
      const location = $el.find('.location, [class*="location"]').first().text().trim() || 'Not specified';

      // Try to find salary
      const salary = $el.find('.salary, [class*="salary"]').first().text().trim() || 'Not specified';

      if (title && fullLink) {
        return {
          title,
          company,
          location,
          salary,
          link: fullLink,
          scrapedAt: new Date().toISOString()
        };
      }

      return null;
    } catch (error) {
      console.error('Error extracting job info:', error.message);
      return null;
    }
  }

  /**
   * Extract job information from link element
   * @param {CheerioStatic} $ - Cheerio instance
   * @param {CheerioElement} element - Link element
   * @returns {Object|null} Job object or null
   */
  extractJobFromLink($, element) {
    try {
      const $link = $(element);
      const title = $link.text().trim();
      const href = $link.attr('href');
      const fullLink = href ? (href.startsWith('http') ? href : `${this.baseUrl}${href}`) : null;

      // Try to find parent container for additional info
      const $parent = $link.closest('article, div[class*="card"], div[class*="job"], div[class*="offer"]');
      const company = $parent.find('[class*="company"]').first().text().trim() || 'Unknown';
      const location = $parent.find('[class*="location"]').first().text().trim() || 'Not specified';
      const salary = $parent.find('[class*="salary"]').first().text().trim() || 'Not specified';

      if (title && fullLink && title.length > 5) {
        return {
          title,
          company,
          location,
          salary,
          link: fullLink,
          scrapedAt: new Date().toISOString()
        };
      }

      return null;
    } catch (error) {
      return null;
    }
  }

  /**
   * Filter jobs by target positions
   * @param {Array} jobs - Array of job objects
   * @returns {Array} Filtered jobs
   */
  filterByPosition(jobs) {
    return jobs.filter(job => {
      const titleLower = job.title.toLowerCase();
      return this.targetPositions.some(position => {
        const positionLower = position.toLowerCase();
        return titleLower.includes(positionLower) ||
               titleLower.includes(positionLower.replace(' ', '-')) ||
               titleLower.includes(positionLower.replace(' ', '_'));
      });
    });
  }

  /**
   * Remove duplicate jobs
   * @param {Array} jobs - Array of job objects
   * @returns {Array} Unique jobs
   */
  removeDuplicates(jobs) {
    const seen = new Set();
    return jobs.filter(job => {
      const key = job.link;
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }
}

module.exports = RocketJobsScraper;
