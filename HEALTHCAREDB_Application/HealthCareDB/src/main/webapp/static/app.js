/**
 * http://usejsdoc.org/
 */
var hccApp = angular.module("hccApp", ['ngMessages', 'ngMaterial', 'googleApi']).run(function($rootScope) {
	/*if (location.protocol != 'https:') {
		location.protocol = 'https:';
	}
	$rootScope.contextRoot = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port: '') + "/HealthCareDB/";*/
}).config(function(googleLoginProvider, $parseProvider, $mdThemingProvider) {
    googleLoginProvider.configure({
        clientId: '1035365942198-a6n1gvb87pdetflppdd1a2qav41lufsd.apps.googleusercontent.com',
        scopes: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/calendar"]
    });
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('grey');
    //$parseProvider.unwrapPromises(true);
});

