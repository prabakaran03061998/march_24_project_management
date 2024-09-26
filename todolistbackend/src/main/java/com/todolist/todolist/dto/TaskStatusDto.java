package com.todolist.todolist.dto;

public class TaskStatusDto {

	private long total;
	private String open;
	private String inProgress;
	private String complete;
	
	
	
	public long getTotal() {
		return total;
	}
	public void setTotal(long total) {
		this.total = total;
	}
	public String getOpen() {
		return open;
	}
	public void setOpen(String open) {
		this.open = open;
	}
	public String getInProgress() {
		return inProgress;
	}
	public void setInProgress(String inProgress) {
		this.inProgress = inProgress;
	}
	public String getComplete() {
		return complete;
	}
	public void setComplete(String complete) {
		this.complete = complete;
	}
	
	public TaskStatusDto(long total, String open, String inProgress, String complete) {
		super();
		this.total = total;
		this.open = open;
		this.inProgress = inProgress;
		this.complete = complete;
	}
	
	public TaskStatusDto() {
		super();
		// TODO Auto-generated constructor stub
	}
}
