package com.todolist.todolist.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todolist.todolist.dto.UserDto;
import com.todolist.todolist.model.User;
import com.todolist.todolist.repository.UserRepositoryService;

@Service

public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepositoryService userRepositoryService;
	
	@Override
	public User saveUser(UserDto userDto) {
		try {
			User user=new User();
			user.setRollNo(userDto.getRollNo());
			user.setUserEmailid(userDto.getUserEmailid());
			user.setUserName(userDto.getUserName());
			user.setPhoneNo(userDto.getPhoneNo());
			user.setDestignation(userDto.getDestignation());
			user.setUserReport(userDto.getUserReport());
			return userRepositoryService.save(user);
			
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.getMessage());
			return null;
		}
		
	}

	@Override
	public List<User> getAllUser() {
		try {
			return userRepositoryService.findAll();
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.getMessage());
			return new ArrayList<>();
		}
	}
	

}
