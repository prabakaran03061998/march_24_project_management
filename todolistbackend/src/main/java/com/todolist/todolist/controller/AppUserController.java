package com.todolist.todolist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.todolist.todolist.dto.UserSigninDto;
import com.todolist.todolist.dto.UserSignupDto;
import com.todolist.todolist.service.UserSignInService;
import com.todolist.todolist.service.UserSignUpService;

@RestController
public class AppUserController {
	
	/** SignIn Service **/
	@Autowired
	private UserSignInService userSignInService;
	
	
	@PostMapping("/signin_service")
	public UserSigninDto saveUser(@RequestBody UserSigninDto userSigninDto) {
		UserSigninDto userSignin = userSignInService.saveUser(userSigninDto);
		return userSignin;
	}
	
	@GetMapping("/getSignin_service")
	public List<UserSigninDto> getUserSignin(){
		return userSignInService.getAll();
	}
	
	/** SignUp Service **/
	@Autowired
	private UserSignUpService userSignUpService;
	
	
	@PostMapping("/signup_service")
	public UserSignupDto saveUser(@RequestBody UserSignupDto userSignupDto) {
		UserSignupDto userSignup = userSignUpService.saveUser(userSignupDto);
		return userSignup;
	}
	
	@GetMapping("/getSignup_service")
	public List<UserSignupDto> getUserSignup(){
		return userSignUpService.getAll();
	}
	
	/** SignIn Api **/
	@PostMapping("/signin")
	public Object signIn(@RequestBody UserSigninDto signin) {
		if(signin == null) {
			return "Failed";
		}
		return "Success";
	}
	
	/** SignUp Api **/
	@PostMapping("/signup")
	public Object signUp(@RequestBody UserSignupDto signup) {
		if(signup == null) {
			return "Failed";
		}
		return "Success";
	}
}
