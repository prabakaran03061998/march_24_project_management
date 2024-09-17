package com.todolist.todolist.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todolist.todolist.model.Project;

@Repository
public interface ProjectRepositoryService extends JpaRepository<Project, Long>{

}
