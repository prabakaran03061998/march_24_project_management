package com.todolist.todolist.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todolist.todolist.dto.TaskDto;
import com.todolist.todolist.dto.TaskReportDto;
import com.todolist.todolist.model.Task;
import com.todolist.todolist.repository.TaskRepositoryService;

@Service
public class TaskServiceImpl implements TaskService {

	@Autowired
	TaskRepositoryService taskRepositoryService;

	@Override
	public Task saveTask(TaskDto taskDto) {
		try {
			Task task = new Task(); // model object
			task.setAssignee(taskDto.getAssignee());
			task.setDescription(taskDto.getDescription());
			task.setId(taskDto.getId());
			task.setName(taskDto.getName());
			task.setStartDate(taskDto.getStartDate());
			task.setStatus(taskDto.getStatus());
			task.setTaskId(taskDto.getTaskId());
			task.setEstimation(taskDto.getEstimation());
			task.setSpend(taskDto.getSpend());
			task.setDueDate(taskDto.getDueDate());
			task.setPriority(taskDto.getPriority());
			
			return taskRepositoryService.save(task);
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}
	
	@Override
	public List<Task> getAllTask(){
		try {
			return taskRepositoryService.findAll();
		}catch (Exception e) {
			System.out.println(e.getMessage());
			return new ArrayList<>();
		}
	}

	@Override
	public TaskReportDto getTaskReport() {
		
		try {
			TaskReportDto taskReportDto = new TaskReportDto();
			taskReportDto.setTotal(taskRepositoryService.findAll().size());
			taskReportDto.setOpen(taskRepositoryService.countBystatus("OPEN"));
			taskReportDto.setInProgress(taskRepositoryService.countBystatus("INP"));
			taskReportDto.setComplete(taskRepositoryService.countBystatus("COMP"));
			return taskReportDto;
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}

}
