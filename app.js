const express = require('express')
const BodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000;

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))
app.use(cors())

let fruits = ['Bananas','Apples','Oranges']

app.get('/', async (req, res) => {
  console.log(fruits)
  res.send({ message: 'hi!' })
});


app.get('/fruits', (req, res) => {
  try{
    console.log(fruits)
    res.send(fruits)
  }
  catch(err){
    console.log(err)
  }
});

app.post('/fruits', (req,res) => {
  try{
    const newFruit = req.body.fruit
    if(! fruits.includes(newFruit)){
      fruits = [...fruits, newFruit]
      res.sendStatus(200)
    }
  }
  catch(err){
    console.log(err)
    res.sendStatus(500)
  }
});

app.listen(PORT, () => { 
  console.log("Hosted on port " + PORT)
})

module.exports = app;
