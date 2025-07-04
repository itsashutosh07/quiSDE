package com.quisde.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.quisde.entity.Flashcard;
import com.quisde.entity.Subject;
import com.quisde.repository.FlashcardRepository;
import com.quisde.repository.SubjectRepository;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FlashcardService {
    private final FlashcardRepository flashcardRepository;
    private final SubjectRepository subjectRepository;

    public List<Flashcard> getAllFlashcards() {
        return flashcardRepository.findAll();
    }

    @PostConstruct
    public void seedFlashcards() {
        if (flashcardRepository.count() == 0) {
            List<Subject> subjects = subjectRepository.findAll();
            for (Subject subject : subjects) {
                flashcardRepository.saveAll(List.of(
                    Flashcard.builder().subject(subject).frontText("What is " + subject.getName() + "?").backText(subject.getDescription()).build(),
                    Flashcard.builder().subject(subject).frontText("Why is " + subject.getName() + " important?").backText("Because " + subject.getDescription()).build()
                ));
            }
        }
    }
} 