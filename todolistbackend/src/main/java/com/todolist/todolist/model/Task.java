package com.todolist.todolist.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "task")
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="task_id")
	private String taskId;
	
	@Column(name="name")
	private String name;
	
	@Column(name="description",columnDefinition = "text")
	private String description;
	
	@Column(name="assignee")
	private String assignee;
	
	@Column(name="status")
	private String status;
	
	@Column(name="start_date")
	private String startDate;

	public Task(long id, String taskId, String name, String description, String assignee, String status,
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

	public Task() {
		super();
		// TODO Auto-generated constructor stub
	}

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
	
	
}
