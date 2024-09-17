//package com.todolist.todolist.model;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.Table;
//
//@Entity
//@Table(name="project")
//
//public class Project {
//	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private long Id;
//	
//	@Column(name="projectId")
//	private long projectId;
//	
//	@Column(name="projectCode")
//	private String projectCode;
//	
//	@Column(name="projectName")
//	private String projectName;
//	
//	@Column(name="projectDescription")
//	private String projectDescription;
//	
//	@Column(name="startDate")
//	private long startDate;
//	
//	@Column(name="endDate")
//	private String endDate;
//	
//	public long getProjectId() {
//		return projectId;
//	}
//	public void setProjectId(long projectId) {
//		this.projectId = projectId;
//	}
//	public String getProjectCode() {
//		return projectCode;
//	}
//	public void setProjectCode(String projectCode) {
//		this.projectCode = projectCode;
//	}
//	public String getProjectName() {
//		return projectName;
//	}
//	public void setProjectName(String projectName) {
//		this.projectName = projectName;
//	}
//	public String getProjectDescription() {
//		return projectDescription;
//	}
//	public void setProjectDescription(String projectDescription) {
//		this.projectDescription = projectDescription;
//	}
//	public long getStartDate() {
//		return startDate;
//	}
//	public void setStartDate(long startDate) {
//		this.startDate = startDate;
//	}
//	public String getEndDate() {
//		return endDate;
//	}
//	public void setEndDate(String endDate) {
//		this.endDate = endDate;
//	}
//	public void ProjectDto(long projectId, String projectCode, String projectName, String projectDescription, long startDate,
//			String endDate) {
//		super();
//		this.Id=Id;
//		this.projectId = projectId;
//		this.projectCode = projectCode;
//		this.projectName = projectName;
//		this.projectDescription = projectDescription;
//		this.startDate = startDate;
//		this.endDate = endDate;
//	}
//	public void ProjectDto() {
//		super();
//		// TODO Auto-generated constructor stub
//	}
//	
//	
//}
//	
//	
//	
//	
//
//}
