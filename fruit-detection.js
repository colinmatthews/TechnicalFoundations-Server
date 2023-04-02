app.post('/fruits/check', (req, res) => {
  try {
    const fruitToCheck = req.body.fruit;
    if (fruits.includes(fruitToCheck)) {
      res.send(200, "Fruit is known");
    } else {
      res.send(400, "Fruit is not known");
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});