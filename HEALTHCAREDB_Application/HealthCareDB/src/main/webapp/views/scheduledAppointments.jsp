<div ng-controller="CalendarController">
	<div style="float: left">
		<md-calendar ng-model="calendarDate" ng-change="fetchAppointments()"></md-calendar>
	</div>
	<md-content>
	      <md-list flex ng-show="eventsAvailable">
	        <md-subheader class="md-no-sticky md-primary"><h3>Scheduled Appointments</h3></md-subheader>
	        <md-list-item class="md-3-line" ng-repeat="appointment in aptList track by $index" ng-click="null">
	          <div class="md-list-item-text" layout="column">
	          	<span style="display: none">{{appointment.id}}</span>
	            <h3>{{appointment.patientEmail}}</h3>
	            <h4>Starts: {{appointment.start}}</h4>
	            <p>Ends: {{appointment.end}}</p>
	          </div>
	          <md-divider ng-if="!$last"></md-divider>
	        </md-list-item>
	      </md-list>
	      <md-subheader ng-show="!eventsAvailable">
	      	No appointments scheduled for this date.
	      </md-subheader>
	</md-content>
</div>