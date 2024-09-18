package com.todolist.todolist.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="userId")
	private String userId;
	
	@Column(name="name")
	private String name;
	
	@Column(name="emailid")
	private String emailId;
	
	@Column(name="phoneNo")
	private long phoneNo;
	
	@Column(name="report")
	private String report;
	
	@Column(name="destignation")
	private String destignation;
	
	@Column(name="password")
	private String password;
	
	

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public long getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getReport() {
		return report;
	}

	public void setReport(String report) {
		this.report = report;
	}

	public String getDestignation() {
		return destignation;
	}

	public void setDestignation(String destignation) {
		this.destignation = destignation;
	}

	public User(long id, String userId, String name, String emailId, String password, long phoneNo, String report, String destignation) {
		super();
		this.id = id;
		this.userId = userId;
		this.name = name;
		this.emailId = emailId;
		this.password = password;
		this.phoneNo = phoneNo;
		this.report = report;
		this.destignation = destignation;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

}
