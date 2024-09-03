const express = require('express')
const app = express()

console.log('I am on a node server, yo');

app.get('/', function (req, res) {
  // res.send('Hello Node from Ex on local dev box')
  res.sendFile('index.html');
})

app.listen(3000)
