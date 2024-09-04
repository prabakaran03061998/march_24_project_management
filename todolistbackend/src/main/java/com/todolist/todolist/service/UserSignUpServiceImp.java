package com.todolist.todolist.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.todolist.todolist.dto.UserSignupDto;

@Service
public class UserSignUpServiceImp implements UserSignUpService{

	List <UserSignupDto> userSignUp = new ArrayList<>();
	
	@Override
	public UserSignupDto saveUser(UserSignupDto signUpDto) {
		userSignUp.add(signUpDto);
		return signUpDto;
	}
	
	@Override
	public List<UserSignupDto> getAll(){
		return userSignUp;
	}
}
