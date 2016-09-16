package com.span.healthcare.controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.span.healthcare.model.PatientInfo;

@RestController
@EnableAspectJAutoProxy(proxyTargetClass = true)
public class RegisterController {

	 @RequestMapping(value = "/registerPatient/", method = RequestMethod.POST, produces = "application/json")
	 public ResponseEntity<PatientInfo> fetchAgentName(@RequestBody PatientInfo patientInfo) throws SQLException{
		 String driverName = "org.apache.hive.jdbc.HiveDriver"; 
		 PatientInfo info = new PatientInfo();
			try {
			      Class.forName(driverName);
			    } catch (ClassNotFoundException e) {
			      // TODO Auto-generated catch block
			      e.printStackTrace();
			      System.exit(1);
			    }
			    Connection con = DriverManager.getConnection("jdbc:hive2://localhost:10000/default", "", "");
			    Statement stmt = con.createStatement();
			    String tableName = "loginUser";
			    String sql = null;
			    boolean insert= stmt.execute("insert into table " + tableName + 
			    		" values("+"'"+patientInfo.getFirstName()+"'"+","+"'"+patientInfo.getLastName()+"'"+","+"'"+patientInfo.getEmail()+"'"+","+"'"+patientInfo.getPhone()+"'"+
			    		","+"'"+patientInfo.getAddress()+"'"+","+"'"+patientInfo.getCity()+"'"+","+"'"+patientInfo.getState()+"'"+","+"'"+patientInfo.getZipCode()+"'"+")");
			     System.out.println(insert);
		 return new ResponseEntity<PatientInfo>(patientInfo, HttpStatus.OK);
	 }
}
