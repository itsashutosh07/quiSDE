# SQL Files for QuiSDE Database Setup

This directory contains SQL files to set up the QuiSDE database with all necessary data.

## Important Note

**All seeding logic has been removed from the backend services.** The application now relies entirely on database data. No hardcoded data will be created automatically.

## Files Overview

### 01_create_categories.sql

Creates the categories table and inserts all category data:

- Core
- Advanced
- Machine Learning
- Software Engineering
- Misc

### 02_insert_subjects.sql

Inserts all subjects with their basic information (name, slug, description, image URL).

### 03_insert_subject_categories.sql

Creates the subject-category relationships table and inserts all mappings.

### 04_insert_subject_categories.sql

Maps subjects to their respective categories based on the following structure:

**Core Subjects:**

- Data Structures & Algorithms
- Object Oriented Programming
- Database Management Systems
- Operating Systems
- Computer Networks

**Advanced Subjects:**

- Design and Analysis of Algorithms
- Computer Architecture
- Web Technology
- Discrete Structures
- Theory of Automata and Formal Languages
- Cryptographic Techniques

**Machine Learning Subjects:**

- Machine Learning
- Probability and Stochastic Processes
- Deep Learning
- Artificial Intelligence
- Gen AI

**Software Engineering Subjects:**

- System Design
- Software Process Models
- Software Project Management
- Software Quality & Maintenance
- Risk Management

**Misc Subjects:**

- Puzzles
- Aptitude
- Logical Reasoning

## Usage

1. Run the SQL files in order (01, 02, 03, 04)
2. The application will now display only the data from the database
3. No automatic seeding will occur - all data must be manually inserted via SQL

## Verification Queries

After running the setup, you can verify the data with these queries:

```sql
-- Check categories
SELECT * FROM categories;

-- Check subjects
SELECT * FROM subjects;

-- Check subject-category relationships
SELECT s.name as subject_name, c.name as category_name
FROM subjects s
JOIN subject_categories sc ON s.id = sc.subject_id
JOIN categories c ON sc.category_id = c.id
ORDER BY c.name, s.name;

-- Count subjects per category
SELECT c.name as category, COUNT(sc.subject_id) as subject_count
FROM categories c
LEFT JOIN subject_categories sc ON c.id = sc.category_id
GROUP BY c.id, c.name
ORDER BY c.name;
```

## File Execution Order

Execute these files in the following order:

### 1. `01_remove_color_column.sql`

- **Purpose**: Removes the deprecated `color` column from the `categories` table
- **When to run**: If you have an existing database with the color column
- **Note**: Safe to run multiple times (uses `IF EXISTS`)

### 2. `02_insert_categories.sql`

- **Purpose**: Inserts the 5 main categories (Core, Advanced, Machine Learning, Software Engineering, Misc)
- **When to run**: For new database setup or to ensure categories exist
- **Note**: Uses `ON DUPLICATE KEY UPDATE` to prevent errors on re-runs

### 3. `03_insert_subjects.sql`

- **Purpose**: Inserts all 24 subjects from the seeding logic
- **When to run**: For new database setup or to add missing subjects
- **Note**: Uses `ON DUPLICATE KEY UPDATE` to prevent errors on re-runs

### 4. `04_insert_subject_categories.sql`

- **Purpose**: Creates the many-to-many relationships between subjects and categories
- **When to run**: After both subjects and categories are inserted
- **Note**: Creates relationships based on the subject slugs and category slugs

### 5. `05_verify_data.sql`

- **Purpose**: Verification queries to ensure data was inserted correctly
- **When to run**: After all other files to verify the setup
- **Expected results**:
  - 24 subjects total
  - 5 categories total
  - Each subject should have appropriate category relationships

## Quick Setup Commands

```sql
-- Run all files in order (MySQL Workbench)
SOURCE 01_remove_color_column.sql;
SOURCE 02_insert_categories.sql;
SOURCE 03_insert_subjects.sql;
SOURCE 04_insert_subject_categories.sql;
SOURCE 05_verify_data.sql;
```

## Manual Execution

If you prefer to run manually, copy and paste each file's content into your MySQL client in the order listed above.

## Troubleshooting

- **Duplicate key errors**: These are normal if data already exists, the `ON DUPLICATE KEY UPDATE` clauses handle this
- **Foreign key errors**: Ensure categories are inserted before subjects, and both before relationships
- **Column not found errors**: Run `01_remove_color_column.sql` first if you have an old database schema

## Data Overview

### Categories (5 total)

- Core
- Advanced
- Machine Learning
- Software Engineering
- Misc

### Subject-Category Mapping

#### Core (5 subjects)

- Data Structures & Algorithms
- Object Oriented Programming
- Database Management Systems
- Operating Systems
- Computer Networks

#### Advanced (6 subjects)

- Design and Analysis of Algorithms
- Computer Architecture
- Web Technology
- Discrete Structures
- Theory of Automata and Formal Languages
- Cryptographic Techniques

#### Machine Learning (5 subjects)

- Machine Learning
- Probability and Stochastic Processes
- Deep Learning
- Artificial Intelligence
- Gen AI

#### Software Engineering (5 subjects)

- System Design
- Software Process Models
- Software Project Management
- Software Quality & Maintenance
- Risk Management

#### Misc (3 subjects)

- Puzzles
- Aptitude
- Logical Reasoning
