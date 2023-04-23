package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entity.Packages;
import com.demo.repository.Packrepo;




@CrossOrigin(origins="http://localhost:4200")
@RestController
public class Packcontroller {



	@Autowired
	private Packrepo prepo;
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/insertpackages")
	public Packages insertPackages(@RequestBody Packages s1)
	{
		return prepo.save(s1);
	}
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/updatePackages")
	public Packages updatePackages(@RequestBody Packages  s2)
	{
		return prepo.save(s2);
	}
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/deletePackages")
	public void deletePackages(@RequestBody Packages  s3)
	{
		 prepo.delete(s3);
	}
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/viewPackages")
	public List<Packages> viewrecord()
	{
		return prepo.findAll();
	}
	
}