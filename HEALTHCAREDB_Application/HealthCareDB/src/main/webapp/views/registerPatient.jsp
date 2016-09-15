<div ng-controller="RegisterController">
	<md-content style="overflow: hidden;">
		<md-subheader class="md-primary md-accent">
			<h2>Register a patient newly to the HealthCare Cloud</h2>
		</md-subheader>
		 <form name="registerForm">
	        <div layout-gt-sm="row">
	          <md-input-container flex-gt-sm layout-margin>
	            <label>First Name</label>
	            <input ng-model="patient.firstName" name="firstName" ng-required="true">
	            <div ng-messages="registerForm.firstName.$error">
	            	<div ng-message="required">This field is required.</div>
	            </div>
	          </md-input-container>
	          <md-input-container flex-gt-sm layout-margin >
	            <label>Last Name</label>
	            <input ng-model="patient.lastName" name="lastName" ng-required="true">
	            <div ng-messages="registerForm.lastName.$error">
	            	<div ng-message="required">This field is required.</div>
	            </div>
	          </md-input-container>
	        </div>
	        <div layout-gt-sm="row">
	           <md-input-container flex-gt-sm layout-margin>
	            <label>Email</label>
	            <input ng-model="patient.email" name="email" ng-required="true" type="email">
	            <div ng-messages="registerForm.email.$error">
	            	<div ng-message="required">This field is required.</div>
	            	<div ng-message="email">Please enter a valid email.</div>
	            </div>
	          </md-input-container>
	          <md-input-container flex-gt-sm layout-margin>
	            <label>Phone</label>
	            <input ng-model="patient.phone" name="phone" ng-required="true" ng-pattern="/^[0-9]{10}$/">
	            <div ng-messages="registerForm.phone.$error">
	            	<div ng-message="required">This field is required.</div>
	            	<div ng-message="pattern">Please enter a valid phone.</div>
	            </div>
	          </md-input-container>
	         </div>
	         <div layout-gt-sm="row">
	          <md-input-container flex-gt-sm layout-margin>
	            <label>Address</label>
	            <input ng-model="patient.address" name="address" ng-required="true">
	            <div ng-messages="registerForm.address.$error">
	            	<div ng-message="required">This field is required.</div>
	            </div>
	          </md-input-container>
	          <md-input-container flex-gt-sm layout-margin>
	            <label>City</label>
	            <input ng-model="patient.city" name="city" ng-required="true">
	            <div ng-messages="registerForm.city.$error">
	            	<div ng-message="required">This field is required.</div>
	            </div>
	          </md-input-container>
	         </div>
	         <div layout-gt-sm="row">
	          <md-input-container flex-gt-sm layout-margin>
	            <label>State</label>
	            <input ng-model="patient.state" name="state" ng-required="true">
	            <div ng-messages="registerForm.state.$error">
	            	<div ng-message="required">This field is required.</div>
	            </div>
	          </md-input-container>
	          <md-input-container flex-gt-sm layout-margin>
	            <label>ZIP Code</label>
	            <input ng-model="patient.zipCode" name="zipCode" ng-required="true" ng-pattern="/^[0-9]{5}$/">
	            <div ng-messages="registerForm.zipCode.$error">
	            	<div ng-message="required">This field is required.</div>
	            	<div ng-message="pattern">Please enter a valid ZIP Code.</div>
	            </div>
	          </md-input-container>
	          </div>
	          <div layout-gt-sm="row">
		        <md-button class="md-primary md-raised" ng-disabled="registerForm.$invalid" ng-click="registerNew()">Register</md-button>
		        <md-button class="md-primary md-raised" ng-click="clear()">Clear</md-button>
		       </div>
	        </div>
	      </form>
	 </md-content>
</div>