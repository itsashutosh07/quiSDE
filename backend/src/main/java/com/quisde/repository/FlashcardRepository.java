package com.quisde.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quisde.entity.Flashcard;

@Repository
public interface FlashcardRepository extends JpaRepository<Flashcard, Long> {
    // Additional query methods if needed
} 