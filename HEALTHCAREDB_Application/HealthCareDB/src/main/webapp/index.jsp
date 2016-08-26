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
	      <!-- <img ng-src="{{$root.contextRoot}}/static/images/hccIcon.png" height="60px" width="80px"></img> 
	      <h2 class="md-flex">HealthCare Cloud</h2>-->
 	</md-toolbar>
  	<md-content flex layout-padding>
  		<md-subheader class="md-primary">
  			<h2>
  			Welcome to HealthCare Cloud!
  			</h2>
  			<md-card md-colors="::{backgroundColor: '{{theme}}-primary-700'}">
			  <md-card-title>
			    <md-card-title-text>
			      <span class="md-headline">What is it?</span>
			      <span class="md-subhead description">HealthCare Cloud is a centralised hub for hospitals to track and store patient history and be able to
			      quickly diagnose without lags between differing providers, when required. 
			      <br/>
			      A common structure is supported to handle data.</span>
			    </md-card-title-text>
			  </md-card-title>
			</md-card>
			
			<md-button class="md-primary md-raised" ng-click="" style="float:right">Login</md-button>
  		</md-subheader> 
  	</md-content>
  	
	<!-- <div ng-controller="CalendarController" class="md-padding" ng-cloak layout="column">
		<google-appointment></google-appointment>
	</div> -->
	</body>
</html>