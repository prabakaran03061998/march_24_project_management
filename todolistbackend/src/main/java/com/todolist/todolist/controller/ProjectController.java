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

import com.todolist.todolist.dto.ProjectDto;
import com.todolist.todolist.model.Project;
import com.todolist.todolist.service.ProjectService;
import com.todolist.todolist.util.ConstUtil;
import com.todolist.todolist.util.FrameResponse;

@RestController
@RequestMapping("/project")
public class ProjectController {

	@Autowired
	private ProjectService projectService;
	
	@PostMapping("/projectsave")
	public ResponseEntity<Map<String,Object>>saveUser(@RequestBody ProjectDto projectDto){
		Project project = projectService.saveProject(projectDto);
		return project !=null
				? new ResponseEntity<>(FrameResponse.create(ConstUtil.SUCCESS, HttpStatus.OK, ConstUtil.USERS), HttpStatus.OK)
						:new ResponseEntity<>(FrameResponse.create(ConstUtil.FAILED, HttpStatus.BAD_REQUEST, ConstUtil.FAILED), HttpStatus.OK);
	}
	
	@GetMapping("/project/get/all")
	public List<Project> getMethodName(){
		return projectService.getAllProject();
	}
	
}
