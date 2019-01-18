package com.revature.spark.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.spark.beans.Doctor;
import com.revature.spark.services.DoctorService;

@RestController
public class DoctorController {
	
	@Autowired
	private DoctorService service;

	@GetMapping("/doctor/all")
	public ResponseEntity<List<Doctor>> findAll(){
		return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/doctor/all/top")
	public ResponseEntity<Map<Doctor, Double>> highestPatientHeartRatePerDoctor(){
		return new ResponseEntity<>(service.highestPatientHeartRatePerDoctor(), HttpStatus.OK);
	}

}
