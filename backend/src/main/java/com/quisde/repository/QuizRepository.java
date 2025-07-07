package com.quisde.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quisde.entity.Quiz;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {
    Optional<Quiz> findBySlug(String slug);
    List<Quiz> findBySubjectId(Long subjectId);
    List<Quiz> findBySubjectIdAndDifficulty(Long subjectId, String difficulty);
} 