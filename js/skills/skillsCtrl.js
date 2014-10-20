angular.module("myInfo").controller("skillsCtrl", function($scope, skillsService) {

	skillsService.getSkills().then(function(data) {
		$scope.skills = data.data.skills;
	});

	$scope.addSkill = function() {
		skillsService.addNewSkill($scope.newSkill).then(function() {
			skillsService.getSkills().then(function(data) {
				$scope.skills = data.data.skills;
			})
		});
		$scope.newSkill = "";
	};
})
