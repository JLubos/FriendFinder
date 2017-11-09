//Dependancies

var path = require("path");

//Routes
module.exports = function(app){

	//Route for the homepage
	app.get("/", function(req,res){
		res.sendFile(path.join(__dirname, "/../public/home.html"));

	});

	//Route for the survey page
	app.get("/survey", function(req,res){
		res.sendFile(path.join(__dirname, "/../public/survey.html"));


	});

};