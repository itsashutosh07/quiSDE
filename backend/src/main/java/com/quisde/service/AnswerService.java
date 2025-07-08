package com.quisde.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.quisde.entity.Answer;
import com.quisde.repository.AnswerRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;

    public List<Answer> getAllAnswers() {
        return answerRepository.findAll();
    }
} 