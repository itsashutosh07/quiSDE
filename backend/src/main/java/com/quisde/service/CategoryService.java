package com.quisde.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.quisde.dto.CategoryDto;
import com.quisde.entity.Category;
import com.quisde.repository.CategoryRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public List<CategoryDto> getAllActiveCategories() {
        return categoryRepository.findByActiveTrue()
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public CategoryDto getCategoryBySlug(String slug) {
        return categoryRepository.findBySlug(slug)
                .map(this::toDto)
                .orElse(null);
    }

    private CategoryDto toDto(Category category) {
        return CategoryDto.builder()
                .slug(category.getSlug())
                .name(category.getName())
                .description(category.getDescription())
                .color(category.getColor())
                .build();
    }
} 