package com.quisde.dto;

import java.util.List;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class QuizAttemptResponse {
    private Long quizId;
    private int totalQuestions;
    private int correctAnswers;
    private double scorePercentage;
    private Long timeSpentSeconds;
    private Map<Long, Boolean> questionResults; // questionId -> isCorrect
    private List<String> feedback; // General feedback messages
} 