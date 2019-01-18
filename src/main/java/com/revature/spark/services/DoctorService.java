package com.revature.spark.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.spark.beans.Doctor;
import com.revature.spark.repository.DoctorRepository;
import com.revature.spark.repository.PatientRepository;
import com.revature.spark.todo.AssociateImplementation;

@Service
public class DoctorService {
	
	/**
	 * In Spring, we would likely @Autowired this property.
	 * Just to keep the associate code free of Spring annotations,
	 * we opted to simply instantiate the old-fashioned way.
	 */
	private AssociateImplementation associateImplementation = new AssociateImplementation();
	
	@Autowired
	private DoctorRepository doctorRepository;
	
	@Autowired
	private PatientRepository patientRepository;
	
	public List<Doctor> findAll(){
		return doctorRepository.findAll();
	}
	
	public Map<Doctor, Double> highestPatientHeartRatePerDoctor(){
		return associateImplementation.highestPatientHeartRatePerDoctor(patientRepository.findAll());
	}
	
}
