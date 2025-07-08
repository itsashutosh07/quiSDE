-- Insert categories
INSERT INTO categories (name, slug, description, active) VALUES 
('Core', 'core', 'Fundamental computer science topics', true),
('Advanced', 'advanced', 'Advanced computer science topics', true),
('Machine Learning', 'machine-learning', 'AI and machine learning topics', true),
('Software Engineering', 'software-engineering', 'Software development and engineering', true),
('Misc', 'misc', 'Miscellaneous topics', true);

-- Insert subjects
INSERT INTO subjects (name, slug, description, image_url) VALUES 
('Data Structures & Algorithms', 'data-structures-algorithms', 'Master the fundamentals of data organization and algorithm design.', '/subject-placeholder-dark.jpeg'),
('Object Oriented Programming', 'object-oriented-programming', 'Explore OOP principles and create robust, modular code.', '/subject-placeholder-dark.jpeg'),
('Database Management Systems', 'database-management-systems', 'Learn to design, implement, and manage efficient databases.', '/subject-placeholder-dark.jpeg'),
('Operating Systems', 'operating-systems', 'Understand OS concepts and how software interacts with hardware.', '/subject-placeholder-dark.jpeg'),
('Computer Networks', 'computer-networks', 'Dive into network protocols, architectures, and communication.', '/subject-placeholder-dark.jpeg'),
('Design and Analysis of Algorithms', 'design-analysis-algorithms', 'Advanced algorithmic techniques and complexity analysis.', '/subject-placeholder-dark.jpeg'),
('Computer Architecture', 'computer-architecture', 'Understanding computer hardware and system design.', '/subject-placeholder-dark.jpeg'),
('Web Technology', 'web-technology', 'Modern web development technologies and frameworks.', '/subject-placeholder-dark.jpeg'),
('Discrete Structures', 'discrete-structures', 'Mathematical foundations for computer science.', '/subject-placeholder-dark.jpeg'),
('Theory of Automata and Formal Languages', 'automata-formal-languages', 'Theoretical foundations of computation and language theory.', '/subject-placeholder-dark.jpeg'),
('Cryptographic Techniques', 'cryptographic-techniques', 'Security protocols and cryptographic algorithms.', '/subject-placeholder-dark.jpeg'),
('Machine Learning', 'machine-learning', 'Introduction to machine learning algorithms and techniques.', '/subject-placeholder-dark.jpeg'),
('Probability and Stochastic Processes', 'probability-stochastic-processes', 'Mathematical foundations for probabilistic modeling.', '/subject-placeholder-dark.jpeg'),
('Deep Learning', 'deep-learning', 'Neural networks and deep learning architectures.', '/subject-placeholder-dark.jpeg'),
('Artificial Intelligence', 'artificial-intelligence', 'Core AI concepts and intelligent systems.', '/subject-placeholder-dark.jpeg'),
('Gen AI', 'gen-ai', 'Generative AI and large language models.', '/subject-placeholder-dark.jpeg'),
('System Design', 'system-design', 'Large-scale system architecture and design patterns.', '/subject-placeholder-dark.jpeg'),
('Software Process Models', 'software-process-models', 'Software development methodologies and processes.', '/subject-placeholder-dark.jpeg'),
('Software Project Management', 'software-project-management', 'Managing software development projects effectively.', '/subject-placeholder-dark.jpeg'),
('Software Quality & Maintenance', 'software-quality-maintenance', 'Quality assurance and software maintenance practices.', '/subject-placeholder-dark.jpeg'),
('Risk Management', 'risk-management', 'Identifying and managing project risks.', '/subject-placeholder-dark.jpeg'),
('Puzzles', 'puzzles', 'Logic puzzles and problem-solving challenges.', '/subject-placeholder-dark.jpeg'),
('Aptitude', 'aptitude', 'Quantitative and logical aptitude questions.', '/subject-placeholder-dark.jpeg'),
('Logical Reasoning', 'logical-reasoning', 'Critical thinking and logical reasoning skills.', '/subject-placeholder-dark.jpeg');

-- Insert subject-category relationships
INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'data-structures-algorithms' AND c.slug = 'core';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'object-oriented-programming' AND c.slug = 'core';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'database-management-systems' AND c.slug = 'core';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'operating-systems' AND c.slug = 'core';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'computer-networks' AND c.slug = 'core';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'design-analysis-algorithms' AND c.slug = 'advanced';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'computer-architecture' AND c.slug = 'advanced';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'web-technology' AND c.slug = 'advanced';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'discrete-structures' AND c.slug = 'advanced';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'automata-formal-languages' AND c.slug = 'advanced';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'cryptographic-techniques' AND c.slug = 'advanced';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'machine-learning' AND c.slug = 'machine-learning';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'probability-stochastic-processes' AND c.slug = 'machine-learning';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'deep-learning' AND c.slug = 'machine-learning';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'artificial-intelligence' AND c.slug = 'machine-learning';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'gen-ai' AND c.slug = 'machine-learning';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'system-design' AND c.slug = 'software-engineering';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'software-process-models' AND c.slug = 'software-engineering';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'software-project-management' AND c.slug = 'software-engineering';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'software-quality-maintenance' AND c.slug = 'software-engineering';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'risk-management' AND c.slug = 'software-engineering';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'puzzles' AND c.slug = 'misc';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'aptitude' AND c.slug = 'misc';

INSERT INTO subject_categories (subject_id, category_id) 
SELECT s.id, c.id FROM subjects s, categories c 
WHERE s.slug = 'logical-reasoning' AND c.slug = 'misc'; 