package com.todolist.todolist.service;

import java.util.List;

import com.todolist.todolist.dto.UserDto;
import com.todolist.todolist.model.User;

public interface UserService {
	
	User saveUser(UserDto userDto);
	
	List<User> getAllUser();

}
