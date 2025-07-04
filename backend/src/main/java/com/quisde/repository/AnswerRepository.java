package com.quisde.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quisde.entity.Answer;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {
    // Additional query methods if needed
} 