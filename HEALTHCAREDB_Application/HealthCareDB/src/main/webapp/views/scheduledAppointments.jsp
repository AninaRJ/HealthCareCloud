<div ng-controller="CalendarController">
	<md-subheader class="md-primary md-accent" flex="50" style="float: left">
			<h2>Check appointments scheduled</h2>
			<div>
				<md-calendar ng-model="calendarDate" ng-change="fetchAppointments()"></md-calendar>
			</div>
	</md-subheader>
	
	<md-content flex="50">
	      <md-list ng-show="eventsAvailable">
	        <md-subheader class="md-no-sticky md-primary"><h3>Scheduled Appointments</h3></md-subheader>
	        <md-list-item class="md-3-line " ng-repeat="appointment in aptList track by $index" ng-click="null">
	          <div class="md-list-item-text" layout="column">
	          	<span style="display: none">{{appointment.id}}</span>
	            <h3>{{appointment.patientEmail}}</h3>
	            <h4>Starts: {{appointment.start}}</h4>
	            <p>Ends: {{appointment.end}}</p>
	            <md-button class="md-secondary md-warn md-hue-2" ng-click="deleteAppointment(appointment.id)">
				    Delete Appointment
				</md-button>
	          </div>
	          <md-divider ng-if="!$last"></md-divider>
	        </md-list-item>
	      </md-list>
	      <md-subheader ng-show="!eventsAvailable" class="md-primary"><h3>
	      	No appointments scheduled for this date.</h3>
	      </md-subheader>
	</md-content>
</div>