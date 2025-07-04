package com.quisde.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quisde.entity.Subject;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Long> {
    // Additional query methods if needed
} 