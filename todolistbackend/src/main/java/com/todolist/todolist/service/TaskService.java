package com.todolist.todolist.service;

import java.util.List;

import com.todolist.todolist.dto.TaskDto;
import com.todolist.todolist.dto.TaskReportDto;
import com.todolist.todolist.model.Task;

public interface TaskService {

	Task saveTask(TaskDto taskDto);

	List<Task> getAllTask();

	TaskReportDto getTaskReport();

}
