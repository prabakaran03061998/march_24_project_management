package com.todolist.todolist.service;

import java.util.List;

import com.todolist.todolist.dto.UserSignupDto;

public interface UserSignUpService {

	public UserSignupDto saveUser(UserSignupDto signUpDto);
	
	public List <UserSignupDto> getAll();
}
