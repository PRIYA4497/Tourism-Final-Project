package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.entity.Packages;

@Repository
public interface Packrepo extends JpaRepository<Packages,Integer> {

}
