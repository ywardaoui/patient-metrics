package com.revature.spark.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.spark.beans.Patient;
import com.revature.spark.services.PatientService;

@RestController
public class PatientController {

	@Autowired
	private PatientService service;
	
	@GetMapping("/patient/all")
	public ResponseEntity<List<Patient>> findAll(){
		return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
	}

	@PostMapping("/patient")
	public ResponseEntity<Patient> create(@Valid @RequestBody Patient patient){
		return new ResponseEntity<>(service.create(patient), HttpStatus.CREATED);
	}

	@PutMapping("/patient")
	public ResponseEntity<Patient> update(@Valid @RequestBody Patient patient){
		return new ResponseEntity<>(service.update(patient), HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/patient")
	public ResponseEntity<Void> delete(@Valid @RequestBody Patient patient){
		service.delete(patient);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/patient/sum")
	public ResponseEntity<Double> sum(){
		return new ResponseEntity<>(service.sum(), HttpStatus.OK);
	}
	
	@GetMapping("/patient/min")
	public ResponseEntity<Double> min(){
		return new ResponseEntity<>(service.min(), HttpStatus.OK);
	}
	
	@GetMapping("/patient/max")
	public ResponseEntity<Double> max(){
		return new ResponseEntity<>(service.max(), HttpStatus.OK);
	}
	
	@GetMapping("/patient/avg")
	public ResponseEntity<Double> avg(){
		return new ResponseEntity<>(service.avg(), HttpStatus.OK);
	}
	
	@GetMapping("/patient/median")
	public ResponseEntity<Double> median(){
		return new ResponseEntity<>(service.median(), HttpStatus.OK);
	}
	
}
