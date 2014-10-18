angular.module("myInfo").service("homeService", function($http, $q) {
	
	var baseUrl = "http://localhost:9001";

	this.getName = function() {
		return $http({
			method: "GET",
			url: baseUrl + "/name"
		});
	};

	this.getLocation = function() {
		return $http({
			method: "GET",
			url: baseUrl + "/location"
		});
	};
})