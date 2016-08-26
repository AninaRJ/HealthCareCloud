<div ng-controller="SearchController">
	<md-content>
		 <form name="searchForm">
	        <div layout-gt-sm="row">
	          <md-input-container flex-gt-sm>
	            <label>Patient ID</label>
	            <input ng-model="patient.id">
	          </md-input-container>
	          <md-input-container flex-gt-sm>
	            <label>First Name</label>
	            <input ng-model="patient.firstName">
	          </md-input-container>
	          <md-input-container flex-gt-sm>
	            <label>Last Name</label>
	            <input ng-model="patient.lastName">
	          </md-input-container>
	          <div class="row">
		        <md-button class="md-primary md-raised" ng-click="searchPatient()">Search</md-button>
		       </div>
	        </div>
	      </form>
	      	<!-- Search Results -->
	      <md-list flex>
	        <md-subheader class="md-no-sticky md-primary"><h3>Patient Information</h3></md-subheader>
	        <md-list-item class="md-3-line" ng-repeat="patient in patientList" ng-click="null">
	         <!--  <img ng-src="{{item.face}}?{{$index}}" class="md-avatar" alt="{{item.who}}" /> -->
	          <div class="md-list-item-text" layout="column">
	            <h3>{{patient.name}}</h3>
	            <h4>{{patient.summary}}</h4>
	            <p>{{patient.history}}</p>
	             <md-button class="md-secondary md-warn">
				    View Details
				  </md-button>
	          </div>
	          <md-divider ng-if="!$last"></md-divider>
	        </md-list-item>
	      </md-list>
	</md-content>
</div>