package com.quisde.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quisde.entity.Quiz;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {
    // Additional query methods if needed
} 