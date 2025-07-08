package com.quisde.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.quisde.entity.Flashcard;
import com.quisde.repository.FlashcardRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FlashcardService {
    private final FlashcardRepository flashcardRepository;

    public List<Flashcard> getAllFlashcards() {
        return flashcardRepository.findAll();
    }
} 