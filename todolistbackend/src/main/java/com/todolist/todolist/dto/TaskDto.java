package com.todolist.todolist.dto;

public class TaskDto {
	
	private long id;
	private String taskId;
	private String name;
	private String description;
	private String assignee;
	private String status;
	private String startDate;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTaskId() {
		return taskId;
	}
	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getAssignee() {
		return assignee;
	}
	public void setAssignee(String assignee) {
		this.assignee = assignee;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public TaskDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public TaskDto(long id, String taskId, String name, String description, String assignee, String status,
			String startDate) {
		super();
		this.id = id;
		this.taskId = taskId;
		this.name = name;
		this.description = description;
		this.assignee = assignee;
		this.status = status;
		this.startDate = startDate;
	}
	
	

}
