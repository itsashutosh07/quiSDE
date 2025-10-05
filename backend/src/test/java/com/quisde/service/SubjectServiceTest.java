package com.quisde.service;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import static org.mockito.ArgumentMatchers.any;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;

import com.quisde.dto.SubjectDto;
import com.quisde.entity.Category;
import com.quisde.entity.Subject;
import com.quisde.entity.SubjectCategory;
import com.quisde.repository.SubjectCategoryRepository;
import com.quisde.repository.SubjectRepository;

@ExtendWith(MockitoExtension.class)
class SubjectServiceTest {

    @Mock
    private SubjectRepository subjectRepository;

    @Mock
    private SubjectCategoryRepository subjectCategoryRepository;

    @InjectMocks
    private SubjectService subjectService;

    private Subject subject1;
    private Subject subject2;
    private Category category1;
    private Category category2;
    private SubjectCategory subjectCategory1;
    private SubjectCategory subjectCategory2;

    @BeforeEach
    void setUp() {
        // Create test subjects
        subject1 = Subject.builder()
                .id(1L)
                .name("Data Structures & Algorithms")
                .slug("data-structures-algorithms")
                .description("Master the fundamentals of data organization and algorithm design.")
                .imageUrl("/subject-placeholder-dark.jpeg")
                .build();

        subject2 = Subject.builder()
                .id(2L)
                .name("Object Oriented Programming")
                .slug("object-oriented-programming")
                .description("Explore OOP principles and create robust, modular code.")
                .imageUrl("/subject-placeholder-dark.jpeg")
                .build();

        // Create test categories
        category1 = Category.builder()
                .id(1L)
                .name("Core")
                .slug("core")
                .description("Fundamental computer science topics")
                .active(true)
                .build();

        category2 = Category.builder()
                .id(2L)
                .name("Advanced")
                .slug("advanced")
                .description("Advanced computer science topics")
                .active(true)
                .build();

        // Create subject-category relationships
        subjectCategory1 = SubjectCategory.builder()
                .id(1L)
                .subject(subject1)
                .category(category1)
                .build();

        subjectCategory2 = SubjectCategory.builder()
                .id(2L)
                .subject(subject1)
                .category(category2)
                .build();
    }

    @Test
    void getAllSubjects_ShouldReturnAllSubjectsWithCategories() {
        // Arrange
        List<Subject> subjects = Arrays.asList(subject1, subject2);
        List<SubjectCategory> subject1Categories = Arrays.asList(subjectCategory1, subjectCategory2);
        List<SubjectCategory> subject2Categories = Arrays.asList();

        when(subjectRepository.findAll()).thenReturn(subjects);
        when(subjectCategoryRepository.findBySubjectId(1L)).thenReturn(subject1Categories);
        when(subjectCategoryRepository.findBySubjectId(2L)).thenReturn(subject2Categories);

        // Act
        List<SubjectDto> result = subjectService.getAllSubjects();

        // Assert
        assertNotNull(result);
        assertEquals(2, result.size());
        
        // Verify that subject1 has both categories
        SubjectDto subject1Dto = result.stream()
                .filter(s -> s.getId().equals(1L))
                .findFirst()
                .orElse(null);
        assertNotNull(subject1Dto);
        assertEquals(2, subject1Dto.getCategories().size());
        assertTrue(subject1Dto.getCategories().contains("core"));
        assertTrue(subject1Dto.getCategories().contains("advanced"));

        // Verify that subject2 has no categories
        SubjectDto subject2Dto = result.stream()
                .filter(s -> s.getId().equals(2L))
                .findFirst()
                .orElse(null);
        assertNotNull(subject2Dto);
        assertEquals(0, subject2Dto.getCategories().size());

        // Verify that repository methods were called correctly
        verify(subjectRepository, times(1)).findAll();
        verify(subjectCategoryRepository, times(1)).findBySubjectId(1L);
        verify(subjectCategoryRepository, times(1)).findBySubjectId(2L);
    }

    @Test
    void getSubjectsByCategory_WhenCategoryIsAll_ShouldReturnAllSubjects() {
        // Arrange
        List<Subject> subjects = Arrays.asList(subject1, subject2);
        List<SubjectCategory> subject1Categories = Arrays.asList(subjectCategory1, subjectCategory2);
        List<SubjectCategory> subject2Categories = Arrays.asList();

        when(subjectRepository.findAll()).thenReturn(subjects);
        when(subjectCategoryRepository.findBySubjectId(1L)).thenReturn(subject1Categories);
        when(subjectCategoryRepository.findBySubjectId(2L)).thenReturn(subject2Categories);

        // Act
        List<SubjectDto> result = subjectService.getSubjectsByCategory("all");

        // Assert
        assertNotNull(result);
        assertEquals(2, result.size());
        verify(subjectRepository, times(1)).findAll();
    }

    @Test
    void getSubjectsByCategory_WhenCategoryIsSpecific_ShouldReturnFilteredSubjects() {
        // Arrange
        List<SubjectCategory> categorySubjects = Arrays.asList(subjectCategory1);
        List<SubjectCategory> subjectCategories = Arrays.asList(subjectCategory1, subjectCategory2);

        when(subjectCategoryRepository.findByCategorySlug("core")).thenReturn(categorySubjects);
        when(subjectCategoryRepository.findBySubjectId(1L)).thenReturn(subjectCategories);

        // Act
        List<SubjectDto> result = subjectService.getSubjectsByCategory("core");

        // Assert
        assertNotNull(result);
        assertEquals(1, result.size());
        
        SubjectDto subjectDto = result.get(0);
        assertEquals(1L, subjectDto.getId());
        assertEquals(2, subjectDto.getCategories().size());
        assertTrue(subjectDto.getCategories().contains("core"));
        assertTrue(subjectDto.getCategories().contains("advanced"));

        verify(subjectCategoryRepository, times(1)).findByCategorySlug("core");
        verify(subjectCategoryRepository, times(1)).findBySubjectId(1L);
    }

    @Test
    void getAllSubjects_WhenNoSubjectsExist_ShouldReturnEmptyList() {
        // Arrange
        when(subjectRepository.findAll()).thenReturn(Arrays.asList());

        // Act
        List<SubjectDto> result = subjectService.getAllSubjects();

        // Assert
        assertNotNull(result);
        assertTrue(result.isEmpty());
        verify(subjectRepository, times(1)).findAll();
        verify(subjectCategoryRepository, never()).findBySubjectId(any());
    }

    @Test
    void getAllSubjects_WhenNoCategoriesExist_ShouldReturnSubjectsWithEmptyCategories() {
        // Arrange
        List<Subject> subjects = Arrays.asList(subject1, subject2);
        when(subjectRepository.findAll()).thenReturn(subjects);
        when(subjectCategoryRepository.findBySubjectId(1L)).thenReturn(Arrays.asList());
        when(subjectCategoryRepository.findBySubjectId(2L)).thenReturn(Arrays.asList());

        // Act
        List<SubjectDto> result = subjectService.getAllSubjects();

        // Assert
        assertNotNull(result);
        assertEquals(2, result.size());
        
        result.forEach(subjectDto -> {
            assertNotNull(subjectDto.getCategories());
            assertTrue(subjectDto.getCategories().isEmpty());
        });
        
        verify(subjectCategoryRepository, times(1)).findBySubjectId(1L);
        verify(subjectCategoryRepository, times(1)).findBySubjectId(2L);
    }
} 