package com.todolist.todolist.service;

import java.util.List;

import com.todolist.todolist.dto.ProjectDto;
import com.todolist.todolist.model.Project;

public interface ProjectService {

	
	public Project saveProject(ProjectDto projectDto);
	
	List<Project> getAllProject();
}
