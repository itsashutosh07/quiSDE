package com.quisde.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.quisde.entity.Subject;
import com.quisde.repository.SubjectRepository;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SubjectService {
    private final SubjectRepository subjectRepository;

    public List<Subject> getAllSubjects() {
        return subjectRepository.findAll();
    }

    @PostConstruct
    public void seedSubjects() {
        if (subjectRepository.count() == 0) {
            subjectRepository.saveAll(List.of(
                Subject.builder().name("Data Structures and Algorithms").type("Core").description("Master the fundamentals of data organization and algorithm design.").imageUrl(null).build(),
                Subject.builder().name("Object Oriented Programming").type("Core").description("Explore OOP principles and create robust, modular code.").imageUrl(null).build(),
                Subject.builder().name("Operating Systems").type("Core").description("Understand OS concepts and how software interacts with hardware.").imageUrl(null).build(),
                Subject.builder().name("Database Management Systems").type("Core").description("Learn to design, implement, and manage efficient databases.").imageUrl(null).build(),
                Subject.builder().name("Computer Networks").type("Core").description("Dive into network protocols, architectures, and communication.").imageUrl(null).build()
            ));
        }
    }
} 