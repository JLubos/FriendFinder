var friends = require("../data/friends.js");
var path = require('path');


var totalDifference = 0;



module.exports = function(app){

	app.get("/api/friends", function(req,res){
		res.json(res);
		res.json(friends);


	});

	app.post("/api/friends", function(req,res){
		console.log(req.body);

		var match ={
			name
		}


	});




}