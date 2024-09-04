package com.todolist.todolist.service;

import java.util.List;

import com.todolist.todolist.dto.UserSigninDto;

public interface UserSignInService {

	public UserSigninDto saveUser(UserSigninDto signInDto);
	
	public List <UserSigninDto> getAll();
}
