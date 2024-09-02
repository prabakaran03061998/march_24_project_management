package com.todolist.todolist.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.todolist.todolist.dto.UserSigninDto;
import com.todolist.todolist.dto.UserSignupDto;

@RestController
public class AppUserController {
	
	
	@PostMapping("/signin")
	public Object signIn(@RequestBody UserSigninDto signin) {
		if(signin == null) {
			return "Failed";
		}
		return "Success";
	}
	
	@PostMapping("/signup")
	public Object signUp(@RequestBody UserSignupDto signup) {
		if(signup == null) {
			return "Failed";
		}
		return "Success";
	}
}
