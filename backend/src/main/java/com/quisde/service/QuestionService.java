package com.quisde.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.quisde.entity.Question;
import com.quisde.repository.QuestionRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }
} 