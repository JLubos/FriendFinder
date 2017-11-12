//Dependacies 
var friends = require("../data/friends.js");
var path = require('path');


var totalDifference = 0;



module.exports = function(app){
	//Get Route for the friends api
	app.get("/api/friends", function(req,res){
		res.json(res);
		res.json(friends);

	});

	//When a user submits data
	app.post("/api/friends", function(req,res){
		console.log(req.body);

		//Matched person object
		var match = {
			name:"",
			image: "",
			matchDiff: 1000
		};


		var user = req.body;
		var userName = user.name;
		var userImage = user.image;
		var userScores = user.scores;

		var totalDifference = 0;

		//loop through the friends array
		for(var i=0; i < friends.length; i++){
			console.log(friends[i].name);
			totalDifference = 0;

			//calculating the difference between the user and friends scores array
			for(var j=0; j<10; j++){

				totalDifference += Math.abs(parseInt(userScores[j])- parseInt(friends[i].scores[j]));

				if(totalDifference <=match.friendDifference){

					match.name = friends[i].name;
					match.iamge = friends[i].image;
					match.matchDiff = totalDifference;	
				}
			}
		}

		//push the user
		friends.push(user);

		res.json(match);
		


	});




}