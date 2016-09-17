/**
 * http://usejsdoc.org/
 */

hccApp.controller("SearchController", ['$scope', '$rootScope', "$mdDialog", "SearchService", function($scope, $rootScope, $mdDialog, SearchService){
	$scope.detailPage = false;
	$scope.currentNavItem = 'generalInfo';
	$scope.patientDetail = {};
	$scope.patient = {
		id: '',
		firstName: '',
		lastName: ''
	};
	$scope.patientList = [];
	
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
		$scope.patient.id = patientId;
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
		var templateURL = '';
		if(name == 'allergy'){
			templateURL = $rootScope.contextRoot + '/static/popups/allergyTemplate.html';
		}
		
		if(name == 'immunization'){
			templateURL = $rootScope.contextRoot + '/static/popups/immunizationTemplate.html';
		}
			
		$mdDialog.show({
			  scope: $scope,
		      preserveScope: true,
		      templateUrl: templateURL,
		      parent: angular.element(document.body),
		      clickOutsideToClose:false
	    });
	}
	
	$scope.closePopup = function(){
		$mdDialog.cancel();
	}
	
	//Adds allergy
	$scope.addAllergy = function(allergy){
		if($scope.patientList.length > 1){
			for(var i =0; i <$scope.patientList.length; i++){
				if($scope.patientList[i].id == $scope.patient.id){
					$scope.patientList[i].medicalInfo.allergies.push(allergy);
				}
			}
		}else{
			$scope.patientList[0].medicalInfo.allergies.push(allergy);
		}
		
		$scope.displayDetails($scope.patient.id);
		$scope.closePopup();
		$scope.showSuccessMessage('Added Allergy!', 'New allergy condition added.');
	}
	
	//Adds Immunization
	$scope.addImmunization = function(immu){
		if($scope.patientList.length > 1){
			for(var i =0; i <$scope.patientList.length; i++){
				if($scope.patientList[i].id == $scope.patient.id){
					$scope.patientList[i].medicalInfo.immunizations.push(immu);
				}
			}
		}else{
			$scope.patientList[0].medicalInfo.immunizations.push(immu);
		}
		
		$scope.displayDetails($scope.patient.id);
		$scope.closePopup();
		$scope.showSuccessMessage('Added Immunization!', 'New immunization added.');
	}
	
	$scope.showSuccessMessage = function(title, description){
		$mdDialog.show(
			      $mdDialog.alert()
			        .parent(angular.element(document.body))
			        .clickOutsideToClose(false)
			        .title(title)
			        .textContent(description)
			        .ok('OK!')
			    );
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