package com.quisde.dto;

import lombok.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuestionDto {
    private Long id;
    private String text;
    private String type;
    private String difficulty;
    private String explanation;
    private List<AnswerDto> answers;
} 