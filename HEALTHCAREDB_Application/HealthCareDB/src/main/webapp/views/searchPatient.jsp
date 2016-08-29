<div ng-controller="SearchController">
	<md-content ng-show="!detailPage">
		<md-subheader class="md-primary md-accent">
			<h2>Search a new Patient</h2>
		</md-subheader>
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
	      <md-list flex ng-show="searchClicked">
	        <md-subheader class="md-no-sticky md-primary"><h3>Patient Information</h3></md-subheader>
	        <md-list-item class="md-3-line" ng-repeat="patient in patientList" ng-click="null">
	         <!--  <img ng-src="{{item.face}}?{{$index}}" class="md-avatar" alt="{{item.who}}" /> -->
	          <div class="md-list-item-text" layout="column">
	            <h3>{{patient.name}}</h3>
	            <h4>{{patient.summary}}</h4>
	            <p>{{patient.history}}</p>
	             <md-button class="md-secondary md-warn" ng-click="displayDetails()">
				    View Details
				  </md-button>
	          </div>
	          <md-divider ng-if="!$last"></md-divider>
	        </md-list-item>
	      </md-list>
	</md-content>
	
	<!-- Detail section -->
	<md-content ng-show="detailPage">
	<md-expansion-panel-group md-component-id="detailPanelGroup">
		  
		 <md-expansion-panel md-component-id="generalPanel">
 
		  <md-expansion-panel-collapsed class=" md-primary">
		    <div class="md-title">General Information</div>
		    <div class="md-summary">Handles contact information too</div>
		    <md-expansion-panel-icon></md-expansion-panel-icon>
		  </md-expansion-panel-collapsed>
		  <md-expansion-panel-expanded>
		    <md-expansion-panel-header>
		      <div class="md-title">General Information</div>
		      <div class="md-summary">View general info</div>
		      <md-expansion-panel-icon></md-expansion-panel-icon>
		    </md-expansion-panel-header>
		    <md-expansion-panel-content>
		      <h4>General Info Content</h4>
		      <p>Put content in here</p>
		    </md-expansion-panel-content>
		    <md-expansion-panel-footer>
		      <div flex></div>
		      <md-button class="md-warn" ng-click="$panel.collapse()">Collapse</md-button>
		    </md-expansion-panel-footer>
		 
		  </md-expansion-panel-expanded>
		 
		</md-expansion-panel>
		
		 <md-expansion-panel md-component-id="medicalPanel">
 
		  <md-expansion-panel-collapsed>
		    <div class="md-title">Medical Information</div>
		    <div class="md-summary"></div>
		    <md-expansion-panel-icon></md-expansion-panel-icon>
		  </md-expansion-panel-collapsed>
		  <md-expansion-panel-expanded>
		    <md-expansion-panel-header>
		      <div class="md-title">Medical Information</div>
		      <div class="md-summary">View general info</div>
		      <md-expansion-panel-icon></md-expansion-panel-icon>
		    </md-expansion-panel-header>
		    <md-expansion-panel-content>
		      <h4>General Info Content</h4>
		      <p>Put content in here</p>
		    </md-expansion-panel-content>
		    <md-expansion-panel-footer>
		      <div flex></div>
		      <md-button class="md-warn" ng-click="$panel.collapse()">Collapse</md-button>
		    </md-expansion-panel-footer>
		 
		  </md-expansion-panel-expanded>
		 
		</md-expansion-panel>
		
		 <md-expansion-panel md-component-id="treatmentPanel">
 
		  <md-expansion-panel-collapsed>
		    <div class="md-title">Treatment History</div>
		    <div class="md-summary"></div>
		    <md-expansion-panel-icon></md-expansion-panel-icon>
		  </md-expansion-panel-collapsed>
		  <md-expansion-panel-expanded>
		    <md-expansion-panel-header>
		      <div class="md-title">Treatment History</div>
		      <div class="md-summary">View general info</div>
		      <md-expansion-panel-icon></md-expansion-panel-icon>
		    </md-expansion-panel-header>
		    <md-expansion-panel-content>
		      <h4>General Info Content</h4>
		      <p>Put content in here</p>
		    </md-expansion-panel-content>
		    <md-expansion-panel-footer>
		      <div flex></div>
		      <md-button class="md-warn" ng-click="$panel.collapse()">Collapse</md-button>
		    </md-expansion-panel-footer>
		 
		  </md-expansion-panel-expanded>
		 
		</md-expansion-panel>
	</md-expansion-panel-group>
	</md-content>
</div>