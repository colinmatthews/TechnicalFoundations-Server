const express = require('express')
const BodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const JobScheduler = require('./services/jobScheduler')
const app = express()
const PORT = process.env.PORT || 3000;

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))
app.use(cors())

// Initialize Job Scheduler
const jobScheduler = new JobScheduler();
if (process.env.SCHEDULER_ENABLED !== 'false') {
  jobScheduler.start();
  console.log('Job scheduler initialized');
}


let fruits = ['Banana','Jackfruit', 'Apple', 'Melon', 'Mangosteen', 'Peach', 'Raspberry', 'Blueberry', 'Avocado', 'Grapes','Pomegranite','Tangerine', 'Mango', 'Cherry', 'Tomato','Huckleberry', 'Lychee', 'Durian', 'Blackberry','Raspberry', 'Payapaya','Lemon','Kiwi','Goldenberry' ]



app.get('/', async (req, res) => {
  res.status(200).send({ message: 'hi!' })
});

app.get('/fruits', (req, res) => {
  try {
    console.log(fruits)
    res.status(200).send(fruits)
  }
  catch (err) {
    console.log(err)
  }
});


app.post('/fruits', (req, res) => {
  try {
    const newFruit = req.body.fruit
    if (!fruits.includes(newFruit)) {
      fruits = [...fruits, newFruit]
      res.send(200, 'Created new fruit')
    }
    else {
      res.send(400, "Fruit already exists")
    }
  }
  catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
});

app.delete('/fruits', (req, res) => {
  try {
    const newFruit = req.body.fruit
    const index = fruits.indexOf(newFruit)
    if (index != -1) {
      fruits.splice(index, 1)
      res.sendStatus(200)
    }
    else {
      res.send(400, 'That fruit does not exist')
    }
  }
  catch (err) {
    console.log(err)
  }
});

app.get('/fruit-check', (req, res) => {
  try {
    const newFruit = req.query.fruit
    if (fruits.includes(newFruit)) {
      res.send(200, "Fruit already exists")
    }
    else {
      res.send(200, "Fruit does not exist")
    }
  }
  catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
});

// The product recommendations endpoint
app.get('/recommend', (req, res) => {
  const type = req.query.type;
  let recommendation;
  switch(type) {
    case 'fruits':
      recommendation = 'Apple';
      break;
    case 'vegetables':
      recommendation = 'Carrot';
      break;
    default:
      recommendation = 'Unknown product type';
  }
  res.status(200).send({ recommendation });
});

// ========== Job Scraper Endpoints ==========

// Get job scraper status
app.get('/jobs/status', (req, res) => {
  try {
    const status = jobScheduler.getStatus();
    res.status(200).json(status);
  } catch (error) {
    console.error('Error getting job scraper status:', error);
    res.status(500).json({ error: error.message });
  }
});

// Manually trigger job scraping
app.post('/jobs/scrape', async (req, res) => {
  try {
    console.log('Manual job scraping triggered via API');
    const result = await jobScheduler.runJobScraping();
    res.status(200).json(result);
  } catch (error) {
    console.error('Error during manual job scraping:', error);
    res.status(500).json({ error: error.message });
  }
});

// Start the scheduler
app.post('/jobs/scheduler/start', (req, res) => {
  try {
    jobScheduler.start();
    res.status(200).json({ message: 'Scheduler started', status: jobScheduler.getStatus() });
  } catch (error) {
    console.error('Error starting scheduler:', error);
    res.status(500).json({ error: error.message });
  }
});

// Stop the scheduler
app.post('/jobs/scheduler/stop', (req, res) => {
  try {
    jobScheduler.stop();
    res.status(200).json({ message: 'Scheduler stopped', status: jobScheduler.getStatus() });
  } catch (error) {
    console.error('Error stopping scheduler:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log("Hosted on port " + PORT)
  console.log("\n=== Job Scraper Endpoints ===")
  console.log("GET  /jobs/status           - Get scheduler status")
  console.log("POST /jobs/scrape           - Manually trigger job scraping")
  console.log("POST /jobs/scheduler/start  - Start the scheduler")
  console.log("POST /jobs/scheduler/stop   - Stop the scheduler")
  console.log("=============================\n")
})

module.exports = app;
