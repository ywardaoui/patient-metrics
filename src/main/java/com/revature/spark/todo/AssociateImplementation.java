package com.revature.spark.todo;

import java.util.List;
import java.util.Map;
import java.util.HashMap; //implemented only for last Question

import com.revature.spark.beans.Doctor;
import com.revature.spark.beans.Patient;

/**
 * Within this class, you will implement the logic to calculate data for various
 * reports.
 * 
 * @author Youness Wardaoui
 * 
 */
public class AssociateImplementation {

	/**
	 * Find the sum of all heart rates.
	 * 
	 * @param calls
	 * @return
	 */
	public Double sum(List<Patient> patients) {
		double sum=0.0;
		for(int i=0 ;i<patients.size() ;i++) {
			
			sum += patients.get(i).getHeartRate();
		}
		return sum;
	}

	/**
	 * Find the lowest heart rate.
	 * 
	 * @param calls
	 * @return
	 */
	public Double min(List<Patient> patients) {
		double min=patients.get(0).getHeartRate();
		for(int i=1 ;i<patients.size() ;i++) {
			if (min > patients.get(i).getHeartRate()) {
			min= patients.get(i).getHeartRate() ;
			}
		}
		return min;
	}

	/**
	 * Find the highest heart rate.
	 * 
	 * @param calls
	 * @return
	 */
	public Double max(List<Patient> patients) {
		double max=patients.get(0).getHeartRate();
		for(int i=1 ;i<patients.size() ;i++) {
			if (max < patients.get(i).getHeartRate()) {
			max= patients.get(i).getHeartRate() ;
			}
		}
		return max;
	}

	/**
	 * Find the average heart rate.
	 * 
	 * @param calls
	 * @return
	 */
	public Double avg(List<Patient> patients) {
		double total= this.sum(patients);
		return total/patients.size();
	}

	/**
	 * Find the median heart rate.
	 * 
	 * @param calls
	 * @return
	 */
	public Double median(List<Patient> patients) {
		//creating array
		double[] ArrHeartRate = new double[patients.size()];
	
		//loading to array
		for(int i=0 ;i<patients.size() ;i++) 
			ArrHeartRate[i] = patients.get(i).getHeartRate();
		
		//sorting
		for (int i = 0; i < ArrHeartRate.length - 1; i++){
	      for(int j = 0; j < ArrHeartRate.length - 1; j++){
	        if(ArrHeartRate[i] < ArrHeartRate[j])
	        {
	          double tempVar = ArrHeartRate[j];
	          ArrHeartRate[j] = ArrHeartRate[i];
	          ArrHeartRate[i] = tempVar;
	        }
	      }
	    } 
		System.out.println(ArrHeartRate);
		//finding median
		double median;
		
		if (ArrHeartRate.length % 2 == 0) {
			median = (ArrHeartRate[ArrHeartRate.length/2] + ArrHeartRate[ArrHeartRate.length/2 - 1])/2;
		}
		else {
		    median = ArrHeartRate [ArrHeartRate.length/2];
		}
		return median;
	}

	/**
	 * !! BONUS CHALLENGE REQUIREMENT !!
	 * 
	 * Find the highest heart rate per doctor
	 * 
	 * @param calls
	 * @return
	 */
	public Map<Doctor, Double> highestPatientHeartRatePerDoctor(List<Patient> patients) {
       // System.out.println(patients);
        
        HashMap<Doctor, Double> map = new HashMap<Doctor, Double>();
        
        for (int i=0; i<patients.size();i++) {
            map.put(patients.get(i).getDoctor(), patients.get(i).getHeartRate());
        }
        
        for (int i=0; i<patients.size();i++) {
        	if (map.get(patients.get(i).getDoctor()) < patients.get(i).getHeartRate()) {
             map.put(patients.get(i).getDoctor(),patients.get(i).getHeartRate());
        		}
        	}
		return map;
}}
