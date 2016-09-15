'use strict';
 
hccApp.factory('SearchService', ['$http', '$q', '$rootScope', function($http, $q, $rootScope){
	return{
		
		searchPatient : function(patientSearch){
			 return $http({
         		  method: 'POST',
       		  url: $rootScope.contextRoot + "searchPatient/",
       		  headers: {
       			   'Content-Type': 'application/json',
       			   'Accept' : ''
       		  },
       		  data: JSON.stringify(patientSearch)
       		}).then(
                       function(response){
                           return response.data;
                       }, 
                       function(errResponse){
                           console.error('Error while fetching patient');
                           return $q.reject(errResponse);
                       }
               );
		}
	}
}]);