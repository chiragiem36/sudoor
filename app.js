var express = require('express')
var app = express()
var mongo = require('mongodb').MongoClient
var bp = require('body-parser')

var db

mongo.connect('mongodb://localhost:27018/data', (err, dbs) => {
  if (!err) {
    db = dbs
  } else {
    console.log(err)
  }
})

app.use('/',express.static('public'))
app.get('/enquiry', bp.json(), (req,res) => {
  console.log(req.body);
  db.collection('enquiry').insert(req.body)
  res.status(200)
  res.end()
})

app.listen(process.env.PORT || '80', () => {
  console.log('server is listening on port 80')
})
