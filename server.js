//Dependancies

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')


var app = express();


//Port for Heroku
var PORT = process.env.PORT || 3000;

//Routes
require('./app/routing/htmlRoutes.js');
require('./app/routing/apiRoutes.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});