var http = require("http");
var express = require("express");
// Create express app
var app = express();

var bodyParser = require ("body-parser");

app.use(bodyParser.json());

var me = {
	name: "Wesley Hodges",
	location: "Provo, UT",
	hobbies: ["programming", "reading", "sports", "politics"],
	occupations: ["GIS Intern", "GIS Technician", "Geospatial Data Analyst"],
	mentions: ["http://espn.go.com", "http://www.google.com"],
	references: ["Jim", "Barry", "Wilson", "Andrew"],
	skills: [{id: 1, name: "Javascript", experience: "Intermediate"},
			 {id: 2, name: "HTML/CSS", experience: "Intermediate"},
			 {id: 3, name: "AngularJS", experience: "Beginner"}]
};

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
 	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
 	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 	next();
});

app.get("/name", function(req, res) {
	// returns your name in JSON object
	res.send({name: me.name});
});

app.get("/location", function(req, res) {
	// returns your location in JSON object
	res.send({location : me.location});
});

	/*
	app.put("/location", function(req, res) {
		// edits current location
	});*/

// query refers to ?value in the url, ie, http://url?order=asc
app.get("/hobbies", function(req, res) {
	// returns your hobbies in an array as JSON object
	if (req.query.order === "desc") {
		var descHobbies = me.hobbies.sort().reverse();
		res.send({hobbies : descHobbies});
	}
	else if (req.query.order === "asc") {
		var ascHobbies = me.hobbies.sort();
		res.send({hobbies: ascHobbies});
	}

	res.send({hobbies : me.hobbies});
});

app.get("/occupations", function(req, res) {
	// returns past occupations in an array as JSON object
	if (req.query.order === "desc") {
		var descOccupations = me.occupations.sort().reverse();
		res.send({occupations : descOccupations});
	}
	else if (req.query.order === "asc") {
		var ascOccupations = me.occupations.sort();
		res.send({occupations: ascOccupations});
	}

	res.send({occupations: me.occupations});
});

app.get("/occupations/latest", function(req, res) {
	// returns the last or current job you have had 
	// in an array as the last item in array as JSON object
	res.send({last_occupation: me.occupations[me.occupations.length - 1]});
});

// Readable/writable endpoints
app.route("/mentions")
	.get(function(req, res) {
		res.send({mentions: me.mentions});
	})
	// Why is req.body.mention equal to null here?
	.post(function(req, res) {
		me.mentions.push(req.body.mention); 
		res.send({mentions: me.mentions});
	});

app.route("/references")
	.get(function(req, res) {
		res.send({references: me.references});
	})
	// Why is req.body.reference equal to null here?
	.post(function(req, res) {
		me.references.push(req.body.reference); 
		res.send({references: me.references});
	});

app.route("/skills")
	.get(function(req, res) {
		res.send({skills: me.skills});
	})
	.post(function(req, res) {
		me.skills.push(req.body); 
		res.send({skills: me.skills});
	});

app.get("/skills/:experience", function(req, res) {
	var experienceLevel = req.params.experience;
	var selectedSkills = [];
	for (var i = 0; i < me.skills.length; i++) {
		if (me.skills[i].experience === experienceLevel) {
			selectedSkills.push(me.skills[i]);
		}
	}
	res.send({skills: selectedSkills});
});

app.listen(9001);