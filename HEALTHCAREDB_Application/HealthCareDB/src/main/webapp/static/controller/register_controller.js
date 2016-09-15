/**
 * http://usejsdoc.org/
 */
hccApp.controller("RegisterController", ["$scope", "RegisterService", function($scope, RegisterService){
	$scope.patient = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		address: '',
		city: '',
		state: '',
		zipCode: ''
	};
	
	$scope.clear = function(){
		$scope.patient = {
				patientId: 'hcc_123',
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				address: '',
				city: '',
				state: '',
				zipCode: ''
			};
		$scope.registerForm.$setPristine(true);
		$scope.registerForm.$setUntouched(true);
	}
	
	$scope.registerNew = function(){
		RegisterService.registerPatient($scope.patient).then(function(response){
			console.log(response);
			$scope.clear();
		}, function(errResponse){
			console.log(errResponse);
		})
	}
}]);