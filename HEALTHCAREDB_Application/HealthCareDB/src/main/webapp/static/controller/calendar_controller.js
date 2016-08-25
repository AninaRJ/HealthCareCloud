/**
 * http://usejsdoc.org/
 */


hccApp.controller('CalendarController',['$scope', 'googleLogin', 'googleCalendar',  function($scope, googleLogin, googleCalendar){
	$scope.login = function () {
        googleLogin.login().then(function() { $scope.loggedIntoGoogle = true; }, function() { console.error("failed login")});
    };

    $scope.$on("googleCalendar:loaded", function() {
        googleCalendar.listCalendars().then(function(cals) {
            $scope.calendars = cals;
        });
    });

    $scope.loadCalendars = function() {
        this.calendars = googleCalendar.listCalendars();
    }

    $scope.addEvent = function() {
        var self = this;
        aptStart = moment(self.eventDate + " " + self.eventTime);
        aptEnd = aptStart.clone().add("hours", 1);
        var event = {
            attendees: [{email: 'ranjani.s@gmail.com'}],
            summary: "Doctor Appointment",
            location: "Brigade Software Park",
            start: { dateTime: aptStart.toDate() },
            end: { dateTime: aptEnd.toDate() }
        };
        googleCalendar.createEvent({
            calendarId: self.selectedCalendar.id,
            sendNotifications: true,
            resource: event
        }).then(function(event) {
            $scope.newEvent = event;
        }, function(error) {
            $scope.eventCreationError = error;
        });

    }	
}]);