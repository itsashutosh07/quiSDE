-- Insert all subjects from the seeding logic
INSERT INTO subjects (name, slug, description, image_url) VALUES
-- Core subjects
('Data Structures & Algorithms', 'data-structures-algorithms', 'Master the fundamentals of data organization and algorithm design.', '/subject-placeholder-dark.jpeg'),
('Object Oriented Programming', 'object-oriented-programming', 'Explore OOP principles and create robust, modular code.', '/subject-placeholder-dark.jpeg'),
('Database Management Systems', 'database-management-systems', 'Learn to design, implement, and manage efficient databases.', '/subject-placeholder-dark.jpeg'),
('Operating Systems', 'operating-systems', 'Understand OS concepts and how software interacts with hardware.', '/subject-placeholder-dark.jpeg'),
('Computer Networks', 'computer-networks', 'Dive into network protocols, architectures, and communication.', '/subject-placeholder-dark.jpeg'),

-- Advanced subjects
('Design and Analysis of Algorithms', 'design-analysis-algorithms', 'Advanced algorithmic techniques and complexity analysis.', '/subject-placeholder-dark.jpeg'),
('Computer Architecture', 'computer-architecture', 'Understanding computer hardware and system design.', '/subject-placeholder-dark.jpeg'),
('Web Technology', 'web-technology', 'Modern web development technologies and frameworks.', '/subject-placeholder-dark.jpeg'),
('Discrete Structures', 'discrete-structures', 'Mathematical foundations for computer science.', '/subject-placeholder-dark.jpeg'),
('Theory of Automata and Formal Languages', 'automata-formal-languages', 'Theoretical foundations of computation and language theory.', '/subject-placeholder-dark.jpeg'),
('Cryptographic Techniques', 'cryptographic-techniques', 'Security protocols and cryptographic algorithms.', '/subject-placeholder-dark.jpeg'),

-- Machine Learning subjects
('Machine Learning', 'machine-learning', 'Introduction to machine learning algorithms and techniques.', '/subject-placeholder-dark.jpeg'),
('Probability and Stochastic Processes', 'probability-stochastic-processes', 'Mathematical foundations for probabilistic modeling.', '/subject-placeholder-dark.jpeg'),
('Deep Learning', 'deep-learning', 'Neural networks and deep learning architectures.', '/subject-placeholder-dark.jpeg'),
('Artificial Intelligence', 'artificial-intelligence', 'Core AI concepts and intelligent systems.', '/subject-placeholder-dark.jpeg'),
('Gen AI', 'gen-ai', 'Generative AI and large language models.', '/subject-placeholder-dark.jpeg'),

-- Software Engineering subjects
('System Design', 'system-design', 'Large-scale system architecture and design patterns.', '/subject-placeholder-dark.jpeg'),
('Software Process Models', 'software-process-models', 'Software development methodologies and processes.', '/subject-placeholder-dark.jpeg'),
('Software Project Management', 'software-project-management', 'Managing software development projects effectively.', '/subject-placeholder-dark.jpeg'),
('Software Quality & Maintenance', 'software-quality-maintenance', 'Quality assurance and software maintenance practices.', '/subject-placeholder-dark.jpeg'),
('Risk Management', 'risk-management', 'Identifying and managing project risks.', '/subject-placeholder-dark.jpeg'),

-- Misc subjects
('Puzzles', 'puzzles', 'Logic puzzles and problem-solving challenges.', '/subject-placeholder-dark.jpeg'),
('Aptitude', 'aptitude', 'Quantitative and logical aptitude questions.', '/subject-placeholder-dark.jpeg'),
('Logical Reasoning', 'logical-reasoning', 'Critical thinking and logical reasoning skills.', '/subject-placeholder-dark.jpeg')
ON DUPLICATE KEY UPDATE name = VALUES(name); 