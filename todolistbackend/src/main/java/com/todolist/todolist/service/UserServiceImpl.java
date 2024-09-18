package com.todolist.todolist.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todolist.todolist.dto.UserDto;
import com.todolist.todolist.dto.UserSigninDto;
import com.todolist.todolist.model.User;
import com.todolist.todolist.repository.UserRepositoryService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepositoryService userRepositoryService;

	@Override
	public User saveUser(UserDto userDto) {
		try {
			User user = new User();
			user.setId(userDto.getId());
			user.setUserId(userDto.getUserId());
			user.setEmailId(userDto.getUserEmailid());
			user.setPhoneNo(userDto.getPhoneNo());
			user.setReport(userDto.getUserReport());
			user.setDestignation(userDto.getDestignation());
			user.setName(userDto.getUserName());
			user.setPassword(userDto.getPassword());
			return userRepositoryService.save(user);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}

	}

	@Override
	public List<User> getAllUser() {
		try {
			return userRepositoryService.findAll();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ArrayList<>();
		}
	}

	@Override
	public User checkUser(UserSigninDto userSigninDto) {
		try {
			return userRepositoryService.findByemailIdAndPassword (userSigninDto.getEmail(),
					userSigninDto.getPassword());
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}

}
