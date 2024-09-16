package com.todolist.todolist.dto;

public class ProjectDto {
	private long id;
	private long projectId;
	private String projectCode;
	private String projectName;
	private String projectDescription;
	private long startDate;
	private String endDate;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getProjectId() {
		return projectId;
	}
	public void setProjectId(long projectId) {
		this.projectId = projectId;
	}
	public String getProjectCode() {
		return projectCode;
	}
	public void setProjectCode(String projectCode) {
		this.projectCode = projectCode;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public String getProjectDescription() {
		return projectDescription;
	}
	public void setProjectDescription(String projectDescription) {
		this.projectDescription = projectDescription;
	}
	public long getStartDate() {
		return startDate;
	}
	public void setStartDate(long startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public ProjectDto(long id, long projectId, String projectCode, String projectName, String projectDescription,
			long startDate, String endDate) {
		super();
		this.id = id;
		this.projectId = projectId;
		this.projectCode = projectCode;
		this.projectName = projectName;
		this.projectDescription = projectDescription;
		this.startDate = startDate;
		this.endDate = endDate;
	}
	public ProjectDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
	
	
	
	