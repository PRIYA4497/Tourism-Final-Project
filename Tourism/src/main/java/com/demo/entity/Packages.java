package com.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Packages 
{
	@Id
	private int packid;
	private String packplacename;
	private String pcity;
	private double pcost;
	private String pdays;
	private String pnights;
	private int persons;
	public Packages() {
		super();
		
	}
	public Packages(int packid, String packplacename, String pcity, double pcost, String pdays, String pnights,
			int persons) {
		super();
		this.packid = packid;
		this.packplacename = packplacename;
		this.pcity = pcity;
		this.pcost = pcost;
		this.pdays = pdays;
		this.pnights = pnights;
		this.persons = persons;
	}
	public int getPackid() {
		return packid;
	}
	public void setPackid(int packid) {
		this.packid = packid;
	}
	public String getPackplacename() {
		return packplacename;
	}
	public void setPackplacename(String packplacename) {
		this.packplacename = packplacename;
	}
	public String getPcity() {
		return pcity;
	}
	public void setPcity(String pcity) {
		this.pcity = pcity;
	}
	public double getPcost() {
		return pcost;
	}
	public void setPcost(double pcost) {
		this.pcost = pcost;
	}
	public String getPdays() {
		return pdays;
	}
	public void setPdays(String pdays) {
		this.pdays = pdays;
	}
	public String getPnights() {
		return pnights;
	}
	public void setPnights(String pnights) {
		this.pnights = pnights;
	}
	public int getPersons() {
		return persons;
	}
	public void setPersons(int persons) {
		this.persons = persons;
	}
	
	
	
}
