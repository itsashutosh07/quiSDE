package com.quisde.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.quisde.entity.Quiz;
import com.quisde.entity.Subject;
import com.quisde.entity.Question;
import com.quisde.entity.Answer;
import com.quisde.repository.QuizRepository;
import com.quisde.repository.SubjectRepository;
import com.quisde.repository.QuestionRepository;
import com.quisde.repository.AnswerRepository;
import com.quisde.dto.QuizAttemptRequest;
import com.quisde.dto.QuizAttemptResponse;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuizService {
    private final QuizRepository quizRepository;
    private final SubjectRepository subjectRepository;
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;

    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    public Optional<Quiz> getQuizById(Long id) {
        return quizRepository.findById(id);
    }

    public Optional<Quiz> getQuizWithQuestions(Long id) {
        return quizRepository.findById(id).map(quiz -> {
            // Load questions for this quiz
            List<Question> questions = questionRepository.findByQuizId(id);
            quiz.setQuestions(questions);
            return quiz;
        });
    }

    public Optional<QuizAttemptResponse> submitQuizAttempt(Long quizId, QuizAttemptRequest request) {
        return quizRepository.findById(quizId).map(quiz -> {
            List<Question> questions = questionRepository.findByQuizId(quizId);
            Map<Long, Boolean> questionResults = new HashMap<>();
            int correctAnswers = 0;
            List<String> feedback = new ArrayList<>();

            for (Question question : questions) {
                Long selectedAnswerId = request.getAnswers().get(question.getId());
                if (selectedAnswerId != null) {
                    Answer selectedAnswer = answerRepository.findById(selectedAnswerId).orElse(null);
                    boolean isCorrect = selectedAnswer != null && selectedAnswer.isCorrect();
                    questionResults.put(question.getId(), isCorrect);
                    if (isCorrect) {
                        correctAnswers++;
                    }
                } else {
                    questionResults.put(question.getId(), false);
                }
            }

            double scorePercentage = questions.isEmpty() ? 0 : (double) correctAnswers / questions.size() * 100;

            // Generate feedback based on score
            if (scorePercentage >= 90) {
                feedback.add("Excellent! You have a strong understanding of this topic.");
            } else if (scorePercentage >= 70) {
                feedback.add("Good job! You're on the right track.");
            } else if (scorePercentage >= 50) {
                feedback.add("Not bad! Review the material and try again.");
            } else {
                feedback.add("Keep practicing! Focus on the areas you missed.");
            }

            return QuizAttemptResponse.builder()
                    .quizId(quizId)
                    .totalQuestions(questions.size())
                    .correctAnswers(correctAnswers)
                    .scorePercentage(scorePercentage)
                    .timeSpentSeconds(request.getTimeSpentSeconds())
                    .questionResults(questionResults)
                    .feedback(feedback)
                    .build();
        });
    }

    @PostConstruct
    public void seedQuizzes() {
        if (quizRepository.count() == 0) {
            List<Subject> subjects = subjectRepository.findAll();
            for (Subject subject : subjects) {
                quizRepository.saveAll(List.of(
                    Quiz.builder().subject(subject).title(subject.getName() + " - Easy Quiz").difficulty("Easy").numQuestions(5).build(),
                    Quiz.builder().subject(subject).title(subject.getName() + " - Medium Quiz").difficulty("Medium").numQuestions(10).build(),
                    Quiz.builder().subject(subject).title(subject.getName() + " - Hard Quiz").difficulty("Hard").numQuestions(25).build()
                ));
            }
        }
    }
} 