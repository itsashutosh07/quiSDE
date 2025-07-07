package com.quisde.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuizDto {
    private String slug;
    private String title;
    private String difficulty;
    private int numQuestions;
    private String subjectSlug;
    private String subjectName;
} 