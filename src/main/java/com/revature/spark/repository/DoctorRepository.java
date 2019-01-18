package com.revature.spark.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.spark.beans.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer>{

}
