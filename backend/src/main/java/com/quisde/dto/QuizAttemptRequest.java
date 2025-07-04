package com.quisde.dto;

import java.util.Map;

import lombok.Data;

@Data
public class QuizAttemptRequest {
    private Map<Long, Long> answers; // questionId -> answerId
    private Long timeSpentSeconds;
} 