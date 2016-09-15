/**
 * http://usejsdoc.org/
 */

hccApp.controller("SearchController", ['$scope', '$rootScope', "SearchService", function($scope, $rootScope, SearchService){
	$scope.detailPage = false;
	$scope.currentNavItem = 'generalInfo';
	
	$scope.patient = {
		id: '',
		firstName: '',
		lastName: ''
	};
	
	/*$scope.patientList = [
		{
			id: 'pid_1',
			name: 'Patient 1',
			summary: 'Summary 1',
			history: 'History 1'
		},
		{
			id: 'pid_2',
			name: 'Patient 2',
			summary: 'Summary 2',
			history: 'History 2'
		},
		{
			id: 'pid_3',
			name: 'Patient 3',
			summary: 'Summary 3',
			history: 'History 3'
		}	
	];*/
	
	$scope.searchClicked = false;
	
	$scope.searchPatient = function(){
		$scope.searchClicked = true;
		SearchService.searchPatient($scope.patient).then(function(data){
			console.log("Data returned successfully");
			$scope.patientList = data;
		}, function(errResponse){
			console.log("Error")
		})
	}
	
	$scope.displayDetails = function(){
		// Display on basis of id
		$scope.detailPage = true;
	}
}]);

hccApp.directive("generalInfo", function($rootScope){
	return{
		restrict: 'E',
		templateUrl: $rootScope.contextRoot + 'static/templates/generalInfo.html'
	}
});

hccApp.directive("medicalInfo", function($rootScope){
	return{
		restrict: 'E',
		templateUrl: $rootScope.contextRoot + 'static/templates/medicalInfo.html'
	}
});

hccApp.directive("treatmentHistory", function($rootScope){
	return{
		restrict: 'E',
		templateUrl: $rootScope.contextRoot + 'static/templates/treatmentHistory.html'
	}
});