package com.quisde.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.quisde.dto.SubjectDto;
import com.quisde.entity.Subject;
import com.quisde.repository.CategoryRepository;
import com.quisde.repository.SubjectCategoryRepository;
import com.quisde.repository.SubjectRepository;

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
                .id(subject.getId())
                .slug(subject.getSlug())
                .name(subject.getName())
                .description(subject.getDescription())
                .imageUrl(subject.getImageUrl())
                .categories(new java.util.HashSet<>(categories))
                .build();
    }
} 