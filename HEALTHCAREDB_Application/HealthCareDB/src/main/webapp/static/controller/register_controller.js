/**
 * http://usejsdoc.org/
 */
hccApp.controller("RegisterController", ["$scope", function($scope){
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
}]);