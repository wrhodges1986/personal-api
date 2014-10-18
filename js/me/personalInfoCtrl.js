angular.module("myInfo").controller("personalInfoCtrl", function($scope, personalInfoService) {

	// Would be better to have one method that "gets" all data and then return separate parts into separate scope variables
	personalInfoService.getHobbies().then(function(data) {
		$scope.hobbies = data.data.hobbies;
	});

	personalInfoService.getOccupations().then(function(data) {
		$scope.occupations = data.data.occupations;
	});

	personalInfoService.getMentions().then(function(data) {
		$scope.mentions = data.data.mentions;
	});

	personalInfoService.getReferences().then(function(data) {
		$scope.references = data.data.references;
	})
})