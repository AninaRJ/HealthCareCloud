/**
 * http://usejsdoc.org/
 */
hccApp.controller("LoginController", ['$scope', '$rootScope', function($scope, $rootScope){
	
	$scope.validateUser = function(){
		// validate user
		window.location.href = $rootScope.contextRoot + 'views/home.jsp';
	}
}]);