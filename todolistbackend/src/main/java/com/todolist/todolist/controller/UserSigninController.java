package com.todolist.todolist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todolist.todolist.dto.UserSigninDto;
import com.todolist.todolist.service.UserService;
import com.todolist.todolist.service.UserSignInService;

@RestController

@RequestMapping("/usersignin")
public class UserSigninController {
	
	@Autowired
	private  UserService userService;
	
	@GetMapping("/user/sigin")
	public UserSigninDto getMethodName(){
	  return userService.getSignin();
	}
}


