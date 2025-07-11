package com.quisde.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "quizzes")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "subject_id", nullable = false)
    @JsonIgnore
    private Subject subject;

    @Column(nullable = false, unique = true)
    private String slug; // e.g., "data-structures-easy-quiz"

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String difficulty; // Easy, Medium, Hard

    @Column(nullable = false)
    private int numQuestions;

    @OneToMany(mappedBy = "quiz", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Question> questions;
} 