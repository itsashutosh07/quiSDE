package com.quisde.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.quisde.entity.Answer;
import com.quisde.entity.Question;
import com.quisde.repository.AnswerRepository;
import com.quisde.repository.QuestionRepository;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionRepository questionRepository;

    public List<Answer> getAllAnswers() {
        return answerRepository.findAll();
    }

    @PostConstruct
    public void seedAnswers() {
        if (answerRepository.count() == 0) {
            List<Question> questions = questionRepository.findAll();
            for (Question question : questions) {
                answerRepository.saveAll(List.of(
                    Answer.builder().question(question).text("Correct answer for: " + question.getText()).isCorrect(true).build(),
                    Answer.builder().question(question).text("Incorrect answer 1 for: " + question.getText()).isCorrect(false).build(),
                    Answer.builder().question(question).text("Incorrect answer 2 for: " + question.getText()).isCorrect(false).build(),
                    Answer.builder().question(question).text("Incorrect answer 3 for: " + question.getText()).isCorrect(false).build()
                ));
            }
        }
    }
} 