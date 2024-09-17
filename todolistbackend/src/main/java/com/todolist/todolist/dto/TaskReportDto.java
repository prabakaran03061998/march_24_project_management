package com.todolist.todolist.dto;

public class TaskReportDto {

	private long open;
	private long inProgress;
	private long complete;
	private long total;
	
	public long getOpen() {
		return open;
	}
	public void setOpen(long open) {
		this.open = open;
	}
	public long getInProgress() {
		return inProgress;
	}
	public void setInProgress(long inProgress) {
		this.inProgress = inProgress;
	}
	public long getComplete() {
		return complete;
	}
	public void setComplete(long complete) {
		this.complete = complete;
	}
	public long getTotal() {
		return total;
	}
	public void setTotal(long total) {
		this.total = total;
	}
	
	public TaskReportDto(long open, long inProgress, long complete, long total) {
		super();
		this.open = open;
		this.inProgress = inProgress;
		this.complete = complete;
		this.total = total;
	}
	
	public TaskReportDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
