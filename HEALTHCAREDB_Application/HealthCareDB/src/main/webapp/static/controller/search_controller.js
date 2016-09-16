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
	
	$scope.searchClicked = false;
	
	$scope.searchPatient = function(){
		$scope.searchClicked = true;
		SearchService.searchPatientfromJSON().then(function(data){
			console.log("Data returned successfully");
			$scope.patientList = data.patients;
		}, function(errResponse){
			console.log("Error")
		})
	}
	
	$scope.displayDetails = function(patientId){
		// Display on basis of id
		$scope.detailPage = true;
		if($scope.patientList.length > 1){
			for(var i =0; i <$scope.patientList.length; i++){
				if($scope.patientList[i].id == patientId){
					$scope.patientDetail = $scope.patientList[i];
				}
			}
		}else{
			$scope.patientDetail = $scope.patientList[0];
		}
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