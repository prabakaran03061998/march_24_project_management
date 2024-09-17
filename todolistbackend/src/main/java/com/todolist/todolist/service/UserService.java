package com.todolist.todolist.service;

import java.util.List;

import com.todolist.todolist.dto.UserDto;
import com.todolist.todolist.dto.UserSigninDto;
import com.todolist.todolist.model.User;

public interface UserService {

	public User saveUser(UserDto userDto);

	List<User> getAllUser();

	public UserSigninDto getSignin();

}
