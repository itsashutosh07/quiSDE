package com.quisde.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quisde.entity.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findByQuizIdAndDifficultyAndActiveTrue(Long quizId, String difficulty);
    List<Question> findByQuizIdAndActiveTrue(Long quizId);
} 