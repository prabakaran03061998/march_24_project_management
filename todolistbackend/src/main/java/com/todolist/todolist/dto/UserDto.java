package com.todolist.todolist.dto;

public class UserDto {
	
	private int id;
	private String userId;
	private String userName;
	private String userEmailid;
	private long phoneNo;
	private String userReport;
	private String destignation;
	
	
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmailid() {
		return userEmailid;
	}

	public void setUserEmailid(String userEmailid) {
		this.userEmailid = userEmailid;
	}

	public long getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getUserReport() {
		return userReport;
	}

	public void setUserReport(String userReport) {
		this.userReport = userReport;
	}

	public String getDestignation() {
		return destignation;
	}

	public void setDestignation(String destignation) {
		this.destignation = destignation;
	}
	
	public UserDto(int id, String userId, String userName, String userEmailid, long phoneNo, String userReport,
			String destignation) {
		super();
		this.id = id;
		this.userId = userId;
		this.userName = userName;
		this.userEmailid = userEmailid;
		this.phoneNo = phoneNo;
		this.userReport = userReport;
		this.destignation = destignation;
	}




	public UserDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	

}
