package com.todolist.todolist.dto;

public class UserSignin {

	private String email;
	private String password;
	
	/** getter setter **/
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	/** constructor **/
	public UserSignin(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	
}
