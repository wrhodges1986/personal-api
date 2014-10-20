angular.module("myInfo").service("skillsService", function($http, $q) {

	var baseUrl = "http://localhost:9001";

	this.getSkills = function() {
		return $http({
			method: "GET",
			url: baseUrl + "/skills"
		});
	};

	this.addNewSkill = function(newSkill) {
		return $http({
			method: "POST",
			url: baseUrl + "/skills",
			data: newSkill
		});
	};

})