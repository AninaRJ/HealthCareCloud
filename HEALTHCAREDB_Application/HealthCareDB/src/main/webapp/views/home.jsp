<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
	<head>
	<title>Health Care Cloud</title>
	<meta name="google-signin-client_id" content="1035365942198-a6n1gvb87pdetflppdd1a2qav41lufsd.apps.googleusercontent.com">
	<link rel="SHORTCUT ICON" href="<c:url value='/static/images/hccIcon.ico' />">
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
	<md-toolbar class="md-primary">
 	</md-toolbar>
  	<md-content class="md-padding">
  		<div ng-controller="CalendarController" class="md-padding" ng-cloak layout="column" style="float: right">
			<div ng-show="!loggedIntoGoogle">
				<md-button class="md-primary md-raised" ng-click="login()">Google Sign-In</md-button>
				 <md-tooltip md-direction="bottom">
		          Login to google directly schedule an appointment for a known patient.
		        </md-tooltip>
			</div>
			<div ng-show="loggedIntoGoogle">
				<md-button class="md-primary md-raised" ng-click="displayAppointmentWindow()">Schedule Appointment</md-button>
				 <md-tooltip md-direction="bottom">
		          Schedule an appointment directly without searching. (If you know the patient's email)
		        </md-tooltip>
			</div>
		</div>
	  	 <md-tabs md-dynamic-height md-border-bottom>
	  	 <md-tab label="Home">
	        <md-content class="md-padding">
	        </md-content>
	      </md-tab>
	      <md-tab label="Search Patient">
	        <md-content class="md-padding">
	        	<div ng-include="'views/searchPatient.jsp'"></div>
	        </md-content>
	      </md-tab>
	      <md-tab label="Recent Patient">
	        <md-content class="md-padding">
	        </md-content>
	      </md-tab>
	      <md-tab label="Scheduled Appointments">
	        <md-content class="md-padding">
	        	<md-calendar ng-model="birthday"></md-calendar>
	        </md-content>
	      </md-tab>
	      <md-tab label="My Profile">
	        <md-content class="md-padding">
	        </md-content>
	      </md-tab>
	    </md-tabs>
	    <!-- <md-nav-bar md-selected-nav-item="page1" nav-bar-aria-label="navigation links">
	      <md-nav-item md-nav-click="goto('page1')" name="page1">Search Patient</md-nav-item>
	      <md-nav-item md-nav-click="goto('page2')" name="page2">Recent Patient</md-nav-item>
	      <md-nav-item md-nav-click="goto('page3')" name="page3">Scheduled Appointments</md-nav-item>
	      <md-nav-item md-nav-click="goto('page4')" name="page4">My Profile</md-nav-item>
	    </md-nav-bar>
	    <div class="ext-content">
	      External content for `<span>{{currentNavItem}}</span>`
	    </div> -->
	</md-content>
	</body>
</html>