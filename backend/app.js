var express = require('express')
var app = express()
var datetime = new Date();

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello Main World --31-- !!! ' + datetime)
})

//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})
