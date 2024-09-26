package com.todolist.todolist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todolist.todolist.dto.TaskStatusDto;
import com.todolist.todolist.service.TaskService;

@RestController
@RequestMapping("/taskStatus")
public class TaskStatusController {
	
	@Autowired
	private TaskService taskService;
	
	@GetMapping("/task/status")
	public TaskStatusDto getMethodName() {
		return taskService.getTaskStatus();
	}
}
