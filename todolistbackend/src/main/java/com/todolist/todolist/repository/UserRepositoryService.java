package com.todolist.todolist.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todolist.todolist.model.User;

@Repository

public interface UserRepositoryService extends JpaRepository<User,Long>{
	
	
	

}
