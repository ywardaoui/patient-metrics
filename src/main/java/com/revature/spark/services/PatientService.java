package com.revature.spark.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.spark.beans.Doctor;
import com.revature.spark.beans.Patient;
import com.revature.spark.repository.DoctorRepository;
import com.revature.spark.repository.PatientRepository;
import com.revature.spark.todo.AssociateImplementation;

@Service
public class PatientService {
	
	/**
	 * In Spring, we would likely @Autowired this property. Just to keep the
	 * associate code free of Spring annotations, we opted to simply instantiate the
	 * old-fashioned way.
	 */
	private AssociateImplementation associateImplementation = new AssociateImplementation();

	@Autowired
	private PatientRepository patientRepository;

	@Autowired
	private DoctorRepository doctorRepository;

	public List<Patient> findAll() {
		return patientRepository.findAll();
	}

	public Patient create(Patient patient) {
		validateDoctor(patient);
		Optional<Patient> toSave = patientRepository.findById(patient.getId());
		if (toSave.isPresent()) {
			throw new RuntimeException("The record with identifier " + patient.getId()
					+ " already exists. Please select a unique identifier.");
		} else {
			return patientRepository.save(patient);
		}
	}

	public Patient update(Patient patient) {
		validateDoctor(patient);
		Optional<Patient> toUpdate = patientRepository.findById(patient.getId());
		if (toUpdate.isPresent()) {
			Patient update = toUpdate.get();
			update.setFirstName(patient.getFirstName());
			update.setLastName(patient.getLastName());
			update.setHeartRate(patient.getHeartRate());
			update.setDoctor(patient.getDoctor());
			return patientRepository.save(update);
		} else {
			throw new RuntimeException("The record with identifier " + patient.getId()
					+ " was not found. You cannot update a record that does not exist.");
		}
	}

	private void validateDoctor(Patient patient) {
		Optional<Doctor> doctor = doctorRepository.findById(patient.getDoctor().getId());
		if (!doctor.isPresent()) {
			throw new RuntimeException("User record does not exist.");
		}
	}

	public void delete(Patient patient) {
		patientRepository.delete(patient);
	}

	public Double sum() {
		return associateImplementation.sum(patientRepository.findAll());
	}

	public Double min() {
		return associateImplementation.min(patientRepository.findAll());
	}

	public Double max() {
		return associateImplementation.max(patientRepository.findAll());
	}

	public Double avg() {
		return associateImplementation.avg(patientRepository.findAll());
	}

	public Double median() {
		return associateImplementation.median(patientRepository.findAll());
	}
	
}
