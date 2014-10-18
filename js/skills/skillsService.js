angular.module("myInfo").service("skillsService", function($http, $q) {

	var baseUrl = "http://localhost:9001";

	this.getSkills = function() {
		return $http({
			method: "GET",
			url: baseUrl + "/skills"
		});
	};

})