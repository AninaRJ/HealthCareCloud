package com.span.healthcare.controller;

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
	 public ResponseEntity<PatientInfo> searchPatient(@RequestBody PatientInfo patient) {
		 return new ResponseEntity<PatientInfo>(patient, HttpStatus.OK);
	 }
}
