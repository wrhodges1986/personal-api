angular.module("myInfo").service("personalInfoService", function($http, $q) {

	var baseUrl = "http://localhost:9001";

	this.getHobbies = function() {
		return $http({
			method: "GET",
			url: baseUrl + "/hobbies"
		});
	};

	this.getOccupations = function() {
		return $http({
			method: "GET",
			url: baseUrl + "/occupations"
		});
	};

	this.getMentions = function() {
		return $http({
			method: "GET",
			url: baseUrl + "/mentions"
		});
	};

	this.getReferences = function() {
		return $http({
			method: "GET",
			url: baseUrl + "/references"
		});
	};

})