const express = require('express')
const app = express()
const port = 3001

let data=["satya"]

app.get('/', (req, res) => {
  res.send(data)
})


app.get('/home', (req, res) => {
    res.send('Hello harry welcome to home!')
  })

app.get('/home/satya', (req, res) => {
    res.send('Hello harry sdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd  welcome to home!')
  })

app.post('/home/:name', (req, res) => {
    data.push(req.params.name)
    res.send(data)
  })

app.delete('/home/:index', (req, res) => {
    let index=req.params.index
    console.log(index)

    data.splice(index,1);

    res.send(data)
  })

  app.put('/home/:index', (req, res) => {
    let index = parseInt(req.params.index, 10);
    console.log(index);

    // Assuming data is defined and is an array
    if (!Array.isArray(data)) {
        return res.status(500).send("Internal server error");
    }

    if (index >= data.length || index < 0) {
        return res.status(404).send("Out of bound index");
    }

    if (!req.body.name) {
        return res.status(400).send("Name is required");
    }

    data[index] = req.body.name;

    res.send(data);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})