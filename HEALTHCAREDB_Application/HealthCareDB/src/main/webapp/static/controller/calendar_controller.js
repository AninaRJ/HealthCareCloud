/**
 * http://usejsdoc.org/
 */

hccApp.controller('CalendarController',['$scope', 'googleLogin', 'googleCalendar', function($scope, googleLogin, googleCalendar){
	$scope.loggedIntoGoogle = false;
	
	$scope.login = function () {
        googleLogin.login().then(function() { $scope.loggedIntoGoogle = true; }, function() { $scope.loggedIntoGoogle = false; console.error("failed login")});
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
        // date : '2016-08-28T09:00:00'
        var timeString = (($scope.eventStartTime).toString().endsWith("AM")? ($scope.eventStartTime).toString().split(" ")[0] + ":00" : ($scope.eventStartTime).toString().split(" ")[0] + ":00");
        self.startDate = moment(self.eventStartDate).toISOString().split("T")[0] + "T" + timeString
        
        timeString = (($scope.eventEndTime).toString().endsWith("AM")? ($scope.eventEndTime).toString().split(" ")[0] + ":00" : ($scope.eventEndTime).toString().split(" ")[0] + ":00");
        self.endDate = moment(self.eventEndDate).toISOString().split("T")[0] + "T" + timeString
        var event = {
        		  attendees: [{email: $scope.attendees}],
                  summary: "Doctor Appointment",
                  location: "Brigade Software Park",
                  description: "You have been invited for the doctor's appointment.",
                  start: { dateTime: self.startDate, timeZone: self.selectedCalendar.timeZone },
                  end: { dateTime: self.endDate, timeZone: self.selectedCalendar.timeZone}
        };
        googleCalendar.createEvent({
            'calendarId': 'primary',
            'sendNotifications': true,
            'resource': event
        }).then(function(event) {
            $scope.newEvent = event;
        }, function(error) {
            $scope.eventCreationError = error;
        });

    }	
}]);