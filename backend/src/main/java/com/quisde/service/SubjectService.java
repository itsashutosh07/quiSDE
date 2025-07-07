package com.quisde.service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.quisde.dto.SubjectDto;
import com.quisde.entity.Category;
import com.quisde.entity.Subject;
import com.quisde.repository.CategoryRepository;
import com.quisde.repository.SubjectCategoryRepository;
import com.quisde.repository.SubjectRepository;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SubjectService {
    private final SubjectRepository subjectRepository;
    private final CategoryRepository categoryRepository;
    private final SubjectCategoryRepository subjectCategoryRepository;

    public List<SubjectDto> getAllSubjects() {
        return subjectRepository.findAll()
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public List<SubjectDto> getSubjectsByCategory(String categorySlug) {
        if ("all".equals(categorySlug)) {
            return getAllSubjects();
        }
        
        return subjectCategoryRepository.findByCategorySlug(categorySlug)
                .stream()
                .map(sc -> toDto(sc.getSubject()))
                .collect(Collectors.toList());
    }

    private SubjectDto toDto(Subject subject) {
        List<String> categories = subjectCategoryRepository.findBySubjectId(subject.getId())
                .stream()
                .map(sc -> sc.getCategory().getSlug())
                .collect(Collectors.toList());

        return SubjectDto.builder()
                .slug(subject.getSlug())
                .name(subject.getName())
                .description(subject.getDescription())
                .imageUrl(subject.getImageUrl())
                .categories(new java.util.HashSet<>(categories))
                .build();
    }

    @PostConstruct
    public void seedData() {
        // Seed categories first
        if (categoryRepository.count() == 0) {
            List<Category> categories = List.of(
                Category.builder().name("Core").slug("core").description("Fundamental computer science topics").color("#d83131").active(true).build(),
                Category.builder().name("Advanced").slug("advanced").description("Advanced computer science topics").color("#8b5cf6").active(true).build(),
                Category.builder().name("Machine Learning").slug("machine-learning").description("AI and machine learning topics").color("#10b981").active(true).build(),
                Category.builder().name("Software Engineering").slug("software-engineering").description("Software development and engineering").color("#f59e0b").active(true).build(),
                Category.builder().name("Misc").slug("misc").description("Miscellaneous topics").color("#6b7280").active(true).build()
            );
            categoryRepository.saveAll(categories);
        }

        // Seed subjects
        if (subjectRepository.count() == 0) {
            List<Subject> subjects = List.of(
                // Core subjects
                Subject.builder().name("Data Structures & Algorithms").slug("data-structures-algorithms").description("Master the fundamentals of data organization and algorithm design.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                Subject.builder().name("Object Oriented Programming").slug("object-oriented-programming").description("Explore OOP principles and create robust, modular code.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                Subject.builder().name("Database Management Systems").slug("database-management-systems").description("Learn to design, implement, and manage efficient databases.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                Subject.builder().name("Operating Systems").slug("operating-systems").description("Understand OS concepts and how software interacts with hardware.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                Subject.builder().name("Computer Networks").slug("computer-networks").description("Dive into network protocols, architectures, and communication.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                
                // Advanced subjects
                Subject.builder().name("Design and Analysis of Algorithms").slug("design-analysis-algorithms").description("Advanced algorithmic techniques and complexity analysis.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                Subject.builder().name("Computer Architecture").slug("computer-architecture").description("Understanding computer hardware and system design.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                Subject.builder().name("Web Technology").slug("web-technology").description("Modern web development technologies and frameworks.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                Subject.builder().name("Discrete Structures").slug("discrete-structures").description("Mathematical foundations for computer science.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                Subject.builder().name("Theory of Automata and Formal Languages").slug("automata-formal-languages").description("Theoretical foundations of computation and language theory.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                Subject.builder().name("Cryptographic Techniques").slug("cryptographic-techniques").description("Security protocols and cryptographic algorithms.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                
                // Machine Learning subjects
                Subject.builder().name("Machine Learning").slug("machine-learning").description("Introduction to machine learning algorithms and techniques.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                Subject.builder().name("Probability and Stochastic Processes").slug("probability-stochastic-processes").description("Mathematical foundations for probabilistic modeling.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                Subject.builder().name("Deep Learning").slug("deep-learning").description("Neural networks and deep learning architectures.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                Subject.builder().name("Artificial Intelligence").slug("artificial-intelligence").description("Core AI concepts and intelligent systems.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                Subject.builder().name("Gen AI").slug("gen-ai").description("Generative AI and large language models.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                
                // Software Engineering subjects
                Subject.builder().name("System Design").slug("system-design").description("Large-scale system architecture and design patterns.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                Subject.builder().name("Software Process Models").slug("software-process-models").description("Software development methodologies and processes.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                Subject.builder().name("Software Project Management").slug("software-project-management").description("Managing software development projects effectively.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                Subject.builder().name("Software Quality & Maintenance").slug("software-quality-maintenance").description("Quality assurance and software maintenance practices.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                Subject.builder().name("Risk Management").slug("risk-management").description("Identifying and managing project risks.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                
                // Misc subjects
                Subject.builder().name("Puzzles").slug("puzzles").description("Logic puzzles and problem-solving challenges.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                Subject.builder().name("Aptitude").slug("aptitude").description("Quantitative and logical aptitude questions.").imageUrl("/subject-placeholder-dark.jpeg").build(),
                Subject.builder().name("Logical Reasoning").slug("logical-reasoning").description("Critical thinking and logical reasoning skills.").imageUrl("/subject-placeholder-dark.jpeg").build()
            );
            subjectRepository.saveAll(subjects);
            
            // Create subject-category relationships
            createSubjectCategoryRelationships();
        }
    }
    
    private void createSubjectCategoryRelationships() {
        // Get all categories and subjects
        List<Category> categories = categoryRepository.findAll();
        List<Subject> subjects = subjectRepository.findAll();
        
        // Define subject-category mappings
        var subjectCategoryMap = Map.ofEntries(
            // Core subjects
            Map.entry("data-structures-algorithms", List.of("core", "advanced")),
            Map.entry("object-oriented-programming", List.of("core")),
            Map.entry("database-management-systems", List.of("core", "software-engineering")),
            Map.entry("operating-systems", List.of("core", "advanced")),
            Map.entry("computer-networks", List.of("core", "advanced")),
            
            // Advanced subjects
            Map.entry("design-analysis-algorithms", List.of("advanced")),
            Map.entry("computer-architecture", List.of("advanced")),
            Map.entry("web-technology", List.of("advanced", "software-engineering")),
            Map.entry("discrete-structures", List.of("advanced")),
            Map.entry("automata-formal-languages", List.of("advanced")),
            Map.entry("cryptographic-techniques", List.of("advanced")),
            
            // Machine Learning subjects
            Map.entry("machine-learning", List.of("machine-learning")),
            Map.entry("probability-stochastic-processes", List.of("machine-learning")),
            Map.entry("deep-learning", List.of("machine-learning")),
            Map.entry("artificial-intelligence", List.of("machine-learning")),
            Map.entry("gen-ai", List.of("machine-learning")),
            
            // Software Engineering subjects
            Map.entry("system-design", List.of("software-engineering")),
            Map.entry("software-process-models", List.of("software-engineering")),
            Map.entry("software-project-management", List.of("software-engineering")),
            Map.entry("software-quality-maintenance", List.of("software-engineering")),
            Map.entry("risk-management", List.of("software-engineering")),
            
            // Misc subjects
            Map.entry("puzzles", List.of("misc")),
            Map.entry("aptitude", List.of("misc")),
            Map.entry("logical-reasoning", List.of("misc"))
        );
        
        // Create relationships
        for (Subject subject : subjects) {
            List<String> categorySlugs = subjectCategoryMap.get(subject.getSlug());
            if (categorySlugs != null) {
                for (String categorySlug : categorySlugs) {
                    Category category = categories.stream()
                        .filter(c -> c.getSlug().equals(categorySlug))
                        .findFirst()
                        .orElse(null);
                    
                    if (category != null) {
                        var subjectCategory = com.quisde.entity.SubjectCategory.builder()
                            .subject(subject)
                            .category(category)
                            .build();
                        subjectCategoryRepository.save(subjectCategory);
                    }
                }
            }
        }
    }
} 