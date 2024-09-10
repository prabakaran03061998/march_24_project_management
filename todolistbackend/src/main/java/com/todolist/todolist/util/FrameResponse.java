package com.todolist.todolist.util;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;

public class FrameResponse {

	public static final String MESSAGE = "message";
	public static final String STATUS = "status";
	public static final String TIMESTAMP = "timestamp";

	public static Map<String, Object> create(String message, HttpStatus status) {
		Map<String, Object> response = new HashMap<>();
		response.put(MESSAGE, message);
		response.put(STATUS, status);
		response.put(TIMESTAMP, new Date());
		return response;
	}

}
