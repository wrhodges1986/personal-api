angular.module("myInfo").controller("homeCtrl", function($scope, homeService) {

	homeService.getName().then(function(data) {
		$scope.name = data.data.name;
	});

	homeService.getLocation().then(function(data) {
		$scope.location = data.data.location;
	});
})