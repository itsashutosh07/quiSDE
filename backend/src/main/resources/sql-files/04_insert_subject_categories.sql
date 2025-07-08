-- Insert subject-category relationships based on user's mapping
-- Core subjects
INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'data-structures-algorithms' AND c.slug = 'core';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'object-oriented-programming' AND c.slug = 'core';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'database-management-systems' AND c.slug = 'core';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'operating-systems' AND c.slug = 'core';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'computer-networks' AND c.slug = 'core';

-- Advanced subjects
INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'design-analysis-algorithms' AND c.slug = 'advanced';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'computer-architecture' AND c.slug = 'advanced';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'web-technology' AND c.slug = 'advanced';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'discrete-structures' AND c.slug = 'advanced';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'automata-formal-languages' AND c.slug = 'advanced';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'cryptographic-techniques' AND c.slug = 'advanced';

-- Machine Learning subjects
INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'machine-learning' AND c.slug = 'machine-learning';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'probability-stochastic-processes' AND c.slug = 'machine-learning';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'deep-learning' AND c.slug = 'machine-learning';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'artificial-intelligence' AND c.slug = 'machine-learning';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'gen-ai' AND c.slug = 'machine-learning';

-- Software Engineering subjects
INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'system-design' AND c.slug = 'software-engineering';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'software-process-models' AND c.slug = 'software-engineering';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'software-project-management' AND c.slug = 'software-engineering';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'software-quality-maintenance' AND c.slug = 'software-engineering';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'risk-management' AND c.slug = 'software-engineering';

-- Misc subjects
INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'puzzles' AND c.slug = 'misc';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'aptitude' AND c.slug = 'misc';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id 
FROM subjects s, categories c 
WHERE s.slug = 'logical-reasoning' AND c.slug = 'misc'; 