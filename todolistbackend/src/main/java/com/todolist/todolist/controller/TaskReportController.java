package com.todolist.todolist.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todolist.todolist.dto.TaskReportDto;
import com.todolist.todolist.service.TaskService;

@RestController
@RequestMapping("/taskReport")
public class TaskReportController {
	
	@Autowired
	private TaskService taskService;
	
	@GetMapping("/task/report")
	public TaskReportDto getMethodName() {
		return taskService.getTaskReport();
	}
}
