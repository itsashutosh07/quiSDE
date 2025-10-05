package com.quisde.controller;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import com.quisde.service.QuizService;
import com.quisde.repository.QuizRepository;
import com.quisde.repository.QuestionRepository;
import com.quisde.repository.AnswerRepository;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class QuizControllerTest {
    
    @MockBean
    private QuizService quizService;
    @MockBean
    private QuizRepository quizRepository;
    @MockBean
    private QuestionRepository questionRepository;
    @MockBean
    private AnswerRepository answerRepository;

    @Test
    void contextLoads() {
        // Minimal test to check if context loads
    }
} 