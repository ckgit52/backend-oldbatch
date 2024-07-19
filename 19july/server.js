const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello satya !')
})

app.get('/home', (req, res) => {
    res.send('Hello harry welcome to home!')
  })

  app.get('/home/satya', (req, res) => {
    res.send('Hello harry sdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd  welcome to home!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})