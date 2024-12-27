package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.stereotype.Controller
public class Controller {
  
	public Controller() {
		// TODO Auto-generated constructor stub
	}
	@RequestMapping("/")
	public String index() {
		return "index.html";
	}

}
