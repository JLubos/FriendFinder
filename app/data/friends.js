//array of friend objects
var friends = [
	{
		"name":"Sora",
	  	"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	  	"scores":[
	      5,
	      1,
	      4,
	      4,
	      5,
	      1,
	      2,
	      5,
	      4,
	      1
	    ],

	},
	{
		"name":"Riku",
	  	"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	  	"scores":[
	      1,
	      5,
	      2,
	      2,
	      1,
	      5,
	      4,
	      1,
	      2,
	      5
	    ],

	},
	{
		"name":"Kairi",
	  	"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	  	"scores":[
	      2,
	      4,
	      3,
	      3,
	      2,
	      4,
	      5,
	      2,
	      3,
	      4
	    ],

	}

]

module.exports = friends;


/*
$('btn').on("click", function(event){
	event.preventDefault();

	var newChar ={
		name: $("#name").val().trim();
		photo:$("#link").val.trim();

	}

	$.get("./api/new", newChar)
	.done(function(data){
		console.log(data);
		alert("works");
	})
}) */