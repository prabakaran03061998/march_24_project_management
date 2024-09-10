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

import com.todolist.todolist.dto.TaskDto;
import com.todolist.todolist.model.Task;
import com.todolist.todolist.service.TaskService;
import com.todolist.todolist.util.ConstUtil;
import com.todolist.todolist.util.FrameResponse;

@RestController
@RequestMapping("/task")
public class TaskController {

	@Autowired
	TaskService taskService;

	@PostMapping("/save")
	public ResponseEntity<Map<String, Object>> saveTask(@RequestBody TaskDto taskDto) {
		Task task = taskService.saveTask(taskDto);
//		if (task != null) {
//			return new ResponseEntity<>(FrameResponse.create(ConstUtil.SUCCESS, HttpStatus.OK), HttpStatus.OK);
//		}
//		return new ResponseEntity<>(FrameResponse.create(ConstUtil.FAILED, HttpStatus.BAD_REQUEST), HttpStatus.OK);
		return task != null
				? new ResponseEntity<>(FrameResponse.create(ConstUtil.SUCCESS, HttpStatus.OK), HttpStatus.OK)
				: new ResponseEntity<>(FrameResponse.create(ConstUtil.FAILED, HttpStatus.BAD_REQUEST), HttpStatus.OK);
	}

	@GetMapping("/get/all")
	public List<Task> getMethodName() {
		return taskService.getAllTask();
	}

}
