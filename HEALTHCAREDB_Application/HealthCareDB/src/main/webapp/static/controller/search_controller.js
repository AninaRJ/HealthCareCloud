/**
 * http://usejsdoc.org/
 */

hccApp.controller("SearchController", ['$scope', '$rootScope', function($scope, $rootScope){
	$scope.detailPage = false;
	$scope.currentNavItem = 'generalInfo';
	
	$scope.patientList = [
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
	];
	
	$scope.searchClicked = false;
	
	$scope.searchPatient = function(){
		$scope.searchClicked = true;
	}
	
	$scope.displayDetails = function(){
		// Display on basis of id
		$scope.detailPage = true;
	}
}]);
