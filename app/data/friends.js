//array of friend objects
var friends = [
	{
		"name":"Sora",
	  	"photo":"https://s-media-cache-ak0.pinimg.com/736x/74/09/9d/74099dd33f2a5cb602ab17eed45750db--sora-kingdom-hearts-land.jpg",
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
	    ]

	},
	{
		"name":"Riku",
	  	"photo":"http://www.iconninja.com/files/116/828/858/hearts-kingdom-riku-icon.png",
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
	    ]

	},
	{
		"name":"Kairi",
	  	"photo":"https://s.yimg.com/wv/images/24bee0803c53919dfc28f53d1837fb44_96.jpg",
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
	    ]

	}

]

module.exports = friends;


/* CLick Button logic
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