package com.todolist.todolist.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todolist.todolist.dto.UserSigninDto;
import com.todolist.todolist.model.User;
import com.todolist.todolist.service.UserService;
import com.todolist.todolist.util.ConstUtil;
import com.todolist.todolist.util.FrameResponse;

@RestController

@RequestMapping("/user")
public class UserSigninController {

	@Autowired
	private UserService userService;

	@PostMapping("/sigin")
	public ResponseEntity<Map<String, Object>> checkSignin(@RequestBody UserSigninDto userSigninDto) {
		User user = userService.checkUser(userSigninDto);
		return user != null
				? new ResponseEntity<>(FrameResponse.create(ConstUtil.SUCCESS, HttpStatus.OK, ConstUtil.USERS), HttpStatus.OK)
						:new ResponseEntity<>(FrameResponse.create(ConstUtil.FAILED, HttpStatus.BAD_REQUEST, ConstUtil.FAILED), HttpStatus.OK);

	}
}
