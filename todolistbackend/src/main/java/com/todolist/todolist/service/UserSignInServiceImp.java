package com.todolist.todolist.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.todolist.todolist.dto.UserSigninDto;

@Service
public class UserSignInServiceImp implements UserSignInService{

	List <UserSigninDto> userSignIn = new ArrayList<>();
	
	@Override
	public UserSigninDto saveUser(UserSigninDto signInDto) {
		userSignIn.add(signInDto);
		return signInDto;
	}
	
	@Override
	public List<UserSigninDto> getAll(){
		return userSignIn;
	}
}
