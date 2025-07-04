package com.quisde.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quisde.entity.Quiz;
import com.quisde.service.QuizService;
import com.quisde.dto.QuizAttemptRequest;
import com.quisde.dto.QuizAttemptResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/quizzes")
@RequiredArgsConstructor
public class QuizController {
    private final QuizService quizService;

    @GetMapping
    public List<Quiz> getAllQuizzes() {
        return quizService.getAllQuizzes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Quiz> getQuizById(@PathVariable Long id) {
        return quizService.getQuizById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}/questions")
    public ResponseEntity<Quiz> getQuizWithQuestions(@PathVariable Long id) {
        return quizService.getQuizWithQuestions(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/{id}/attempt")
    public ResponseEntity<QuizAttemptResponse> submitQuizAttempt(
            @PathVariable Long id,
            @RequestBody QuizAttemptRequest attemptRequest) {
        return quizService.submitQuizAttempt(id, attemptRequest)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
} 