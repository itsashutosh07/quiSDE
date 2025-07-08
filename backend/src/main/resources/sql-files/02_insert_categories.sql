-- Insert categories (without color column)
INSERT INTO categories (name, slug, description, active) VALUES
('Core', 'core', 'Fundamental computer science topics', true),
('Advanced', 'advanced', 'Advanced computer science topics', true),
('Machine Learning', 'machine-learning', 'AI and machine learning topics', true),
('Software Engineering', 'software-engineering', 'Software development and engineering', true),
('Misc', 'misc', 'Miscellaneous topics', true)
ON DUPLICATE KEY UPDATE name = VALUES(name); 