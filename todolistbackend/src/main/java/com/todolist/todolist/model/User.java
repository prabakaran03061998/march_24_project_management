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
	private long RollNo;
	
	@Column(name="username")
	private String UserName;
	
	@Column(name="useremailid")
	private String UserEmailid;
	
	@Column(name="userphoneno")
	private long PhoneNo;
	
	@Column(name="userreport")
	private String UserReport;
	
	@Column(name="userdestignation")
	private String Destignation;
	
		public long getRollNo() {
			return RollNo;
		}
		public void setRollNo(long rollNo) {
			RollNo = rollNo;
		}
		public String getUserName() {
			return UserName;
		}
		public void setUserName(String userName) {
			UserName = userName;
		}
		public String getUserEmailid() {
			return UserEmailid;
		}
		public void setUserEmailid(String userEmailid) {
			UserEmailid = userEmailid;
		}
		public long getPhoneNo() {
			return PhoneNo;
		}
		public void setPhoneNo(long phoneNo) {
			PhoneNo = phoneNo;
		}
		public String getUserReport() {
			return UserReport;
		}
		public void setUserReport(String userReport) {
			UserReport = userReport;
		}
		public String getDestignation() {
			return Destignation;
		}
		public void setDestignation(String destignation) {
			Destignation = destignation;
		}
		public User(long rollNo, String userName, String userEmailid, long phoneNo, String userReport,
				String destignation) {
			super();
			RollNo = rollNo;
			UserName = userName;
			UserEmailid = userEmailid;
			PhoneNo = phoneNo;
			UserReport = userReport;
		}
		public User() {
			super();
			// TODO Auto-generated constructor stub
		}
		
		
		
		

	}
