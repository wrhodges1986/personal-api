angular.module("myInfo").controller("skillsCtrl", function($scope, skillsService) {

	skillsService.getSkills().then(function(data) {
		$scope.skills = data.data.skills;
	});
})