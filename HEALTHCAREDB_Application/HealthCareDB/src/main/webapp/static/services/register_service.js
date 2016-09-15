'use strict';
 
hccApp.factory('RegisterService', ['$http', '$q', '$rootScope', function($http, $q, $rootScope){
	return{
		
		registerPatient : function(patientInfo){
			 return $http({
         		  method: 'POST',
       		  url: $rootScope.contextRoot + "registerPatient/",
       		  headers: {
       			   'Content-Type': 'application/json',
       			   'Accept' : ''
       		  },
       		  data: JSON.stringify(patientInfo)
       		}).then(
                       function(response){
                           return response.data;
                       }, 
                       function(errResponse){
                           console.error('Error while registering users');
                           return $q.reject(errResponse);
                       }
               );
		}
	}
}]);