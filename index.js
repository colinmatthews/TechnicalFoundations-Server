const express = require('express')
const BodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000;

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))
app.use(cors())




let fruits = ['Banana', 'Apple', 'Melon', 'Mangosteen', 'Peach', 'Raspberry', 'Blueberry', 'Avocado', 'Grapes', 'Orange' ]



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

app.listen(PORT, () => {
  console.log("Hosted on port " + PORT)
})

module.exports = app;
