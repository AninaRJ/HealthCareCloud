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
public class SearchController {

	 @RequestMapping(value = "/searchPatient/", method = RequestMethod.POST, produces = "application/json")
	 public ResponseEntity<PatientInfo> searchPatient(@RequestBody PatientInfo patient) throws SQLException{
		 String driverName = "org.apache.hive.jdbc.HiveDriver"; 
		 ResultSet res = null;
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
			    sql = "select * from " + tableName +" where firstname = "+"'"+patient.getFirstName()+"'"+";";
			    System.out.println("Running: " + sql);
			    res = stmt.executeQuery(sql);
			    while (res.next()) {
			    	patient.setFirstName(res.getString(1));
			    	patient.setLastName(res.getString(2));
			    	patient.setEmail(res.getString(3));
			    	patient.setPhone(res.getString(4));
			    	patient.setAddress(res.getString(5));
			    	patient.setCity(res.getString(6));
			    	patient.setState(res.getString(7));
			    	patient.setZipCode(res.getString(8));
			    	
			    }
		 return new ResponseEntity<PatientInfo>(patient, HttpStatus.OK);
	 }
}
