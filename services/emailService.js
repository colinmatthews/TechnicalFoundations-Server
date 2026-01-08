const nodemailer = require('nodemailer');

/**
 * Email Service for sending job alerts
 */
class EmailService {
  constructor() {
    this.transporter = null;
    this.fromEmail = process.env.EMAIL_FROM || 'noreply@jobscraper.com';
    this.toEmail = process.env.EMAIL_TO;
    this.setupTransporter();
  }

  /**
   * Setup email transporter based on environment configuration
   */
  setupTransporter() {
    // Support multiple email providers through environment variables
    const emailProvider = process.env.EMAIL_PROVIDER || 'gmail';

    if (emailProvider === 'gmail') {
      // Gmail configuration
      this.transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD // Use App Password for Gmail
        }
      });
    } else if (emailProvider === 'smtp') {
      // Custom SMTP configuration
      this.transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
        }
      });
    } else if (emailProvider === 'sendgrid') {
      // SendGrid configuration
      this.transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
          user: 'apikey',
          pass: process.env.SENDGRID_API_KEY
        }
      });
    } else {
      console.warn('No email provider configured. Email functionality will not work.');
    }
  }

  /**
   * Send job alert email
   * @param {Array} jobs - Array of job objects
   * @returns {Promise<Object>} Email send result
   */
  async sendJobAlert(jobs) {
    if (!this.transporter) {
      throw new Error('Email transporter not configured. Please set up environment variables.');
    }

    if (!this.toEmail) {
      throw new Error('Recipient email (EMAIL_TO) not configured.');
    }

    if (!jobs || jobs.length === 0) {
      console.log('No jobs to send in email alert.');
      return { success: false, message: 'No jobs to send' };
    }

    try {
      const subject = `🎯 Nowe oferty pracy: Marketing - ${new Date().toLocaleDateString('pl-PL')}`;
      const htmlContent = this.generateEmailHTML(jobs);
      const textContent = this.generateEmailText(jobs);

      const mailOptions = {
        from: this.fromEmail,
        to: this.toEmail,
        subject: subject,
        text: textContent,
        html: htmlContent
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);

      return {
        success: true,
        messageId: info.messageId,
        jobCount: jobs.length
      };
    } catch (error) {
      console.error('Error sending email:', error.message);
      throw error;
    }
  }

  /**
   * Generate HTML content for email
   * @param {Array} jobs - Array of job objects
   * @returns {string} HTML content
   */
  generateEmailHTML(jobs) {
    const jobsHTML = jobs.map(job => `
      <div style="margin-bottom: 25px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
        <h3 style="margin: 0 0 10px 0; color: #1976d2;">
          <a href="${job.link}" style="color: #1976d2; text-decoration: none;">${job.title}</a>
        </h3>
        <p style="margin: 5px 0; color: #555;">
          <strong>Firma:</strong> ${job.company}
        </p>
        <p style="margin: 5px 0; color: #555;">
          <strong>Lokalizacja:</strong> ${job.location}
        </p>
        ${job.salary !== 'Not specified' ? `
        <p style="margin: 5px 0; color: #555;">
          <strong>Wynagrodzenie:</strong> ${job.salary}
        </p>
        ` : ''}
        <p style="margin: 15px 0 0 0;">
          <a href="${job.link}" style="display: inline-block; padding: 10px 20px; background-color: #1976d2; color: white; text-decoration: none; border-radius: 4px;">
            Zobacz ofertę
          </a>
        </p>
      </div>
    `).join('');

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nowe oferty pracy - Marketing</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h1 style="color: #1976d2; border-bottom: 3px solid #1976d2; padding-bottom: 10px;">
            🎯 Nowe oferty pracy
          </h1>
          <p style="font-size: 16px; color: #666;">
            Znaleziono <strong>${jobs.length}</strong> ${jobs.length === 1 ? 'ofertę' : 'ofert'} pracy w marketingu:
          </p>
          <div style="margin-top: 20px;">
            ${jobsHTML}
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;">
          <p style="font-size: 12px; color: #999; text-align: center;">
            Ten email został wygenerowany automatycznie przez Job Scraper.<br>
            Data: ${new Date().toLocaleString('pl-PL')}
          </p>
        </div>
      </body>
      </html>
    `;
  }

  /**
   * Generate plain text content for email
   * @param {Array} jobs - Array of job objects
   * @returns {string} Plain text content
   */
  generateEmailText(jobs) {
    const jobsText = jobs.map((job, index) => `
${index + 1}. ${job.title}
   Firma: ${job.company}
   Lokalizacja: ${job.location}
   ${job.salary !== 'Not specified' ? `Wynagrodzenie: ${job.salary}` : ''}
   Link: ${job.link}
    `).join('\n---\n');

    return `
Nowe oferty pracy - Marketing
==============================

Znaleziono ${jobs.length} ${jobs.length === 1 ? 'ofertę' : 'ofert'} pracy:

${jobsText}

---
Ten email został wygenerowany automatycznie przez Job Scraper.
Data: ${new Date().toLocaleString('pl-PL')}
    `.trim();
  }

  /**
   * Verify email configuration
   * @returns {Promise<boolean>} True if configuration is valid
   */
  async verifyConfiguration() {
    if (!this.transporter) {
      console.error('Email transporter not configured.');
      return false;
    }

    try {
      await this.transporter.verify();
      console.log('Email configuration verified successfully.');
      return true;
    } catch (error) {
      console.error('Email configuration verification failed:', error.message);
      return false;
    }
  }
}

module.exports = EmailService;
