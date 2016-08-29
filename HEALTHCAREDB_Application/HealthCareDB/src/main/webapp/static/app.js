/**
 * http://usejsdoc.org/
 */
var hccApp = angular.module("hccApp", ['ngMessages', 'ngMaterial', 'googleApi', 'material.components.expansionPanels']).run(function($rootScope) {
	/*if (location.protocol != 'https:') {
		location.protocol = 'https:';
	}*/
	$rootScope.contextRoot = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port: '') + "/HealthCareDB/";
	$rootScope.apiKey='AIzaSyD1HsaJ5nZFbr_KmFZZAXIBCP6lFCFVtfA';
}).config(function(googleLoginProvider, $parseProvider, $mdThemingProvider, $mdDateLocaleProvider) {
    googleLoginProvider.configure({
        clientId: '1035365942198-a6n1gvb87pdetflppdd1a2qav41lufsd.apps.googleusercontent.com',
        scopes: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/calendar"]
    });
    
    
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('deep-orange');
    
    $mdDateLocaleProvider.parseDate = function(dateString) {
	    var m = moment(dateString, 'L', true);
	    return m.isValid() ? m.toDate() : new Date(NaN);
	  };
	  $mdDateLocaleProvider.formatDate = function(date) {
	    var m = moment(date);
	    return m.isValid() ? m.format('L') : '';
	  };
});