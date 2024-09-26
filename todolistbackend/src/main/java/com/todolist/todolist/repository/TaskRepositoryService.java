package com.todolist.todolist.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todolist.todolist.model.Task;

@Repository
public interface TaskRepositoryService extends JpaRepository<Task,Long> {

	long countBystatus(String string);

	List<Task> findBystatus(String string);
	
	
}