package com.todolist.todolist.user;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.todolist.todolist.dto.UserSignin;
import com.todolist.todolist.dto.UserSignup;

@RestController
public class User {
	
	
	@PostMapping("/signin")
	public Object signIn(@RequestBody UserSignin signin) {
		if(signin == null) {
			return "Failed";
		}
		return "Success";
	}
	
	@PostMapping("/signup")
	public Object signUp(@RequestBody UserSignup signup) {
		if(signup == null) {
			return "Failed";
		}
		return "Success";
	}
}
