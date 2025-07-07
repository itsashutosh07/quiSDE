package com.quisde.dto;

import lombok.*;
import java.util.Set;
import java.util.HashSet;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SubjectDto {
    private Long id;
    private String name;
    private String slug;
    private String description;
    private String imageUrl;
    private Set<String> categories = new HashSet<>();
} 