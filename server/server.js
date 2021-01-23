// server file

//mongoose
var mongoose = require('mongoose')
var express = require("express");
var app = express();
var bodyParser = require('body-parser')

app.get("/", function(req, res) {
    res.status(200).send("CONTACTLESS HOTEL MENU APP");
  });

mongoose.connect('mongodb://localhost:27017/hotelManagementDB', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected', () => {
  console.log('Connected to mdongo db');
});

mongoose.connection.on('error', (err) => {
  console.log('Connection to the db failed', err);
});
//------------
//body-parser
app.use(bodyParser.json())

//models
require('./src/models/Categories');

//Routes
var categories = require('./src/routes/categories')

app.use(categories)


//port
var server = app.listen(8000, function () {
    console.log("Server Running on port.", server.address().port);
});