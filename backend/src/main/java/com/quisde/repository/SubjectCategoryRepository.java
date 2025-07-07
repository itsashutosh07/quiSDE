package com.quisde.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.quisde.entity.SubjectCategory;

@Repository
public interface SubjectCategoryRepository extends JpaRepository<SubjectCategory, Long> {
    List<SubjectCategory> findBySubjectId(Long subjectId);
    
    @Query("SELECT sc FROM SubjectCategory sc WHERE sc.category.slug = :categorySlug")
    List<SubjectCategory> findByCategorySlug(@Param("categorySlug") String categorySlug);
    
    void deleteBySubjectId(Long subjectId);
} 