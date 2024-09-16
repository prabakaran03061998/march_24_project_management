package com.todolist.todolist.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todolist.todolist.model.Project;

public interface ProjectRepositoryService extends JpaRepository<Project, Long>{

}
