package com.todolist.todolist.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todolist.todolist.dto.UserDto;
import com.todolist.todolist.model.User;
import com.todolist.todolist.service.UserService;
import com.todolist.todolist.util.ConstUtil;
import com.todolist.todolist.util.FrameResponse;


@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/usersave")
	public ResponseEntity<Map<String,Object>>saveUser(@RequestBody UserDto userDto){
		User user = userService.saveUser(userDto);
		return user !=null
				? new ResponseEntity<>(FrameResponse.create(ConstUtil.SUCCESS, HttpStatus.OK), HttpStatus.OK)
						:new ResponseEntity<>(FrameResponse.create(ConstUtil.FAILED, HttpStatus.BAD_REQUEST), HttpStatus.OK);
	}
	
	@GetMapping("/user/get/all")
	public List<User> getMethodName(){
		return userService.getAllUser();
	}

}
