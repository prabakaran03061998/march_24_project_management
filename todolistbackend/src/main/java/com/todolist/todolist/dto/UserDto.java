package com.todolist.todolist.dto;

public class UserDto {
	
	private long RollNo;
	private String UserName;
	private String UserEmailid;
	private long PhoneNo;
	private String UserReport;
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
	public UserDto(long rollNo, String userName, String userEmailid, long phoneNo, String userReport,
			String destignation) {
		super();
		RollNo = rollNo;
		UserName = userName;
		UserEmailid = userEmailid;
		PhoneNo = phoneNo;
		UserReport = userReport;
		Destignation = destignation;
	}
	public UserDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	

}
