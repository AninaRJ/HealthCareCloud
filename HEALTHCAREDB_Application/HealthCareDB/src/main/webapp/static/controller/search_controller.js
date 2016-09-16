/**
 * http://usejsdoc.org/
 */

hccApp.controller("SearchController", ['$scope', '$rootScope', "$mdDialog", "SearchService", function($scope, $rootScope, $mdDialog, SearchService){
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
	
	$scope.displayPopup= function(name){
		if(name == 'allergy'){
			$mdDialog.show({
			      preserveScope: true,
			      templateUrl: $rootScope.contextRoot + '/static/popups/allergyTemplate.html',
			      parent: angular.element(document.body),
			      clickOutsideToClose:false
		    })
		    .then(function(answer) {
		      $scope.status = 'You said the information was "' + answer + '".';
		    }, function() {
		      $scope.status = 'You cancelled the dialog.';
		    });
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