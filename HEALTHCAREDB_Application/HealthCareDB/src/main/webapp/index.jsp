<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
	<head>
	<title>Health Care Cloud</title>
	<meta name="google-signin-client_id" content="1035365942198-a6n1gvb87pdetflppdd1a2qav41lufsd.apps.googleusercontent.com">
	
	<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.0.0/angular-material.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.1/angular.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.1/angular-messages.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-animate.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-aria.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-messages.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.0.0/angular-material.min.js"></script>
	<!-- Google Script -->
	<script src="<c:url value='/static/js/angular-googleapi.js' />"></script>
	<script src="<c:url value='/static/js/moment.js' />"></script>
		<script>
	  function googleClientLoaded() {
	    gapi.auth.init(function () { });
	  }
	</script>
	<script src="https://apis.google.com/js/client.js?onload=googleClientLoaded"></script>
	<script src="<c:url value='/static/app.js' />"></script>
	<script src="<c:url value='/static/controller/calendar_controller.js' />"></script>
	</head>
	<body ng-app="hccApp">
		<div ng-controller="CalendarController" class="md-padding" ng-cloak layout="column">
			 <div>
				  <form>
				    <div ng-show="!loggedIntoGoogle">
				    	<md-button class="md-primary md-raised" ng-click="login()">Login To Google</md-button>
				    </div>
				    <div ng-show="loggedIntoGoogle">
				    <md-input-container>
         				 <label>Calendar:</label>
				    	<md-select ng-model="selectedCalendar">
				    		<md-option ng-repeat="calendar in calendars" ng-value="calendar.summary" >{{calendar.summary}}</md-option>
				    	</md-select>
				    </md-input-container>
				    </div>
				    <label>Event Date</label>
				    <md-datepicker ng-model="eventDate"></md-datepicker>
				    <label>At:</label>
				     <input type="time" ng-model="eventTime" />
				    <md-button class="md-primary md-raised"  ng-click="addEvent()" ng-disabled="!selectedCalendar">Create</md-button>
				  </form>
			  </div>
		</div>
	</body>
</html>