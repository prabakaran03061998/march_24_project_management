package com.todolist.todolist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.todolist.todolist.model.Task;
import com.todolist.todolist.service.TaskService;

@RestController
@RequestMapping("/taskStatus")
public class TaskStatusController {
	
	@Autowired
	private TaskService taskService;
	
	@GetMapping("/task/status")
	public List<Task> getMethodName(@RequestParam("status")String status) {
		return taskService.getTaskStatus(status);
	}
}
