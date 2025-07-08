-- Verify the data after insertion
-- Check total count of subjects
SELECT COUNT(*) as total_subjects FROM subjects;

-- Check total count of categories
SELECT COUNT(*) as total_categories FROM categories;

-- Check subjects with their categories
SELECT 
    s.name as subject_name,
    s.slug as subject_slug,
    GROUP_CONCAT(c.slug) as categories
FROM subjects s
LEFT JOIN subject_categories sc ON s.id = sc.subject_id
LEFT JOIN categories c ON sc.category_id = c.id
GROUP BY s.id, s.name, s.slug
ORDER BY s.name;

-- Check category distribution
SELECT 
    c.name as category_name,
    c.slug as category_slug,
    COUNT(sc.subject_id) as subject_count
FROM categories c
LEFT JOIN subject_categories sc ON c.id = sc.category_id
GROUP BY c.id, c.name, c.slug
ORDER BY subject_count DESC; 