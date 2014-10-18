var app = angular.module("myInfo", ["ngRoute"]);

app.config(function($routeProvider) {

	$routeProvider
	.when("/", {
		templateUrl: "js/home/homeTmpl.html",
		controller: "homeCtrl"
	})
	.when("/me", {
		templateUrl: "js/me/personalInfoTmpl.html",
		controller: "personalInfoCtrl"
	})
	.when("/skills", {
		templateUrl: "js/skills/skillsTmpl.html",
		controller: "skillsCtrl"
	})
	.otherwise({
		redirectTo: "/"
	});
})