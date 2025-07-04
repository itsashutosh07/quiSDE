package com.quisde.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.quisde.entity.Question;
import com.quisde.entity.Quiz;
import com.quisde.repository.QuestionRepository;
import com.quisde.repository.QuizRepository;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final QuizRepository quizRepository;

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    @PostConstruct
    public void seedQuestions() {
        if (questionRepository.count() == 0) {
            List<Quiz> quizzes = quizRepository.findAll();
            for (Quiz quiz : quizzes) {
                // Example: Add 2 questions per quiz for demo
                questionRepository.saveAll(List.of(
                    Question.builder().quiz(quiz).text("What is the main concept of " + quiz.getTitle() + "?").difficulty(quiz.getDifficulty()).build(),
                    Question.builder().quiz(quiz).text("Why is " + quiz.getTitle() + " important?").difficulty(quiz.getDifficulty()).build()
                ));
            }
        }
    }
} 