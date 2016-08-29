/**
 * http://usejsdoc.org/
 */

hccApp.controller('CalendarController',['$scope', 'googleLogin', 'googleCalendar', '$mdDialog', '$rootScope', function($scope, googleLogin, googleCalendar, $mdDialog, $rootScope){
	$scope.loggedIntoGoogle = false;
	$scope.calendarDate = '';
	$scope.eventsAvailable = false;
	$scope.aptList = [];
	
	$scope.login = function () {
        googleLogin.login().then(function() { $scope.loggedIntoGoogle = true; $scope.displayAppointmentWindow(); }, function() { $scope.loggedIntoGoogle = false; console.error("failed login")});
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
        var timeString = $scope.formatTime($scope.eventStartTime);//(($scope.eventStartTime).toString().endsWith("AM")? ($scope.eventStartTime).toString().split(" ")[0] + ":00" : ($scope.eventStartTime).toString().split(" ")[0] + ":00");
        self.startDate = moment(self.eventStartDate).toISOString().split("T")[0] + "T" + timeString
        
        timeString =  $scope.formatTime($scope.eventEndTime);//(($scope.eventEndTime).toString().endsWith("AM")? ($scope.eventEndTime).toString().split(" ")[0] + ":00" : ($scope.eventEndTime).toString().split(" ")[0] + ":00");
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
            $mdDialog.show(
				      $mdDialog.alert()
				        .parent(angular.element(document.body))
				        .clickOutsideToClose(false)
				        .title('Successfully created!')
				        .textContent('The appointment has been scheduled successfully.')
				        .ariaLabel('Session Timedout!')
				        .ok('OK')
				    ).then(function() {
				    	$scope.cancelEvent();
				    });
            
        }, function(error) {
            $scope.eventCreationError = error;
        });
    }
    
    $scope.displayAppointmentWindow = function(ev) {
        $mdDialog.show({
          controller: 'CalendarController',
          templateUrl: $rootScope.contextRoot + 'static/templates/gCalendarInvite.html',
          parent: angular.element(document.body),
          clickOutsideToClose:false,
          scope: $scope,
          preserveScope: true
        })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
      };
    
    $scope.cancelEvent = function(){
    	$scope.attendees = "";
    	$scope.eventStartDate = '';
    	$scope.eventStartTime = '';
    	$scope.eventEndDate = '';
    	$scope.eventEndTime = '';
    	$scope.selectedCalendar = '';
    	$scope.loggedIntoGoogle = true;
    	$mdDialog.cancel();
    }
    
    $scope.formatTime = function(timeString){
    	if((timeString).toString().endsWith("AM")){
    		// Morning appointment
    		timeString = (timeString).toString().split("AM")[0].trim() + ":00"  
    	}
    	else{
    		timeString = (timeString).toString().split("PM")[0].trim() + ":00"
    		var hours = parseInt((timeString).toString().split(":")[0]) + 12;
    		timeString = hours + ":" + (timeString).toString().split(":")[1] + ":" + (timeString).toString().split(":")[2]
    	}
    	return timeString;
    }
    
    $scope.fetchAppointments = function(){
    	var timeMin = moment($scope.calendarDate).add(1, 'days').toISOString().split("T")[0] + "T00:00:00Z";
    	var timeMax = moment($scope.calendarDate).add(2, 'days').toISOString().split("T")[0] + "T00:00:00Z";

    	googleCalendar.listEvents({
            'calendarId': 'primary',
            'timeMin': timeMin,
            'timeMax': timeMax
        }).then(function(events) {
           $scope.aptList = [];
           $scope.eventsAvailable = false;
           for(var i =0; i<events.length; i++){
        	   var appointment = {
        				id: events[i].id,
        				patientEmail: events[i].attendees[0].email,
        				start: moment(events[i].start.dateTime).calendar(),
        				end: moment(events[i].end.dateTime).calendar(),
        				eventLink: events[i].htmlLink
        		}
        	  $scope.aptList.push(appointment);
        	  if(!$scope.eventsAvailable){
        		  $scope.eventsAvailable = true;
        	  }
           }
        }, function(error) {
            $scope.eventCreationError = error;
        });
    }
    
    $scope.deleteAppointment = function(eventId){
    	googleCalendar.deleteEvent({
    		'calendarId' : 'primary',
    		'eventId' : eventId 
    	}).then(function(events) {
    		 $mdDialog.show(
				      $mdDialog.alert()
				        .parent(angular.element(document.body))
				        .clickOutsideToClose(false)
				        .title('Successfully deleted!')
				        .textContent('The appointment has been deleted successfully.')
				        .ariaLabel('Session Timedout!')
				        .ok('OK')
				    ).then(function() {
				    	$scope.cancelEvent();
				    });
    		 $scope.fetchAppointments();
         }, function(error) {
             $scope.eventCreationError = error;
         });
    }
}]);