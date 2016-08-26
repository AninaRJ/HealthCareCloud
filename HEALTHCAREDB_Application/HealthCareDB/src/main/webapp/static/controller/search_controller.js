/**
 * http://usejsdoc.org/
 */

hccApp.controller("SearchController", ['$scope', '$rootScope', function($scope, $rootScope){
	
	$scope.patientList = [
		{
			name: 'Patient 1',
			summary: 'Summary 1',
			history: 'History 1'
		},
		{
			name: 'Patient 2',
			summary: 'Summary 2',
			history: 'History 2'
		},
		{
			name: 'Patient 3',
			summary: 'Summary 3',
			history: 'History 3'
		}	
	];
	
	$scope.searchPatient = function(){
		
	}
}]);
