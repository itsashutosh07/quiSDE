// src/components/SubjectSelection.js
import React, { useState } from "react"; // ENSURE useState IS IMPORTED
import styled from "styled-components";
import { Link } from "react-router-dom";

// Using a single placeholder image for all subjects
const subjectPlaceholderImage =
  process.env.PUBLIC_URL + "/assets/subject-placeholder-dark.jpeg";

const SubjectSelectionContainer = styled.section`
  padding: 60px 30px;
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const SectionTitle = styled.h2`
  font-family: "Kode Mono", monospace;
  font-size: 2rem;
  margin-bottom: 35px;
  text-align: left;
  padding-left: 0;
`;

const CategoryFilters = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  padding-left: 30px;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  border: 2px solid ${({ theme }) => theme.secondaryText};
  border-radius: 8px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  font-family: "Kode Mono", monospace;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    border-color: ${({ theme }) => theme.primary};
  }

  &.active {
    font-weight: 600;
  }
`;

const SubjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding-left: 30px;
  padding-right: 30px;
`;

const SubjectCardContainer = styled.div`
  background-color: #1e1e1e;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SubjectCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const SubjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

const CardContent = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
`;

const SubjectTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
  font-family: "Kode Mono", monospace;
  text-align: left;
`;

const SubjectDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: auto;
  line-height: 1.5;
  text-align: left;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0px 0px 0px;
`;

const QuizzesAvailable = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 0;
  text-align: left;
`;

const StartButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Kode Mono", monospace;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
  align-self: flex-end;
`;

const SubjectSelection = () => {
  const [activeFilter, setActiveFilter] = useState("All"); // *** VERIFY useState IS HERE ***

  const subjectsData = [
    {
      topic: "Core",
      subjects: [
        {
          id: 1,
          name: "Data Structures and Algorithms",
          description:
            "Master the fundamentals of data organization and algorithm design.",
          quizzes: 25,
          image: subjectPlaceholderImage,
          link: "/quiz/dsalgo",
        },
        {
          id: 2,
          name: "Object Oriented Programming",
          description:
            "Explore OOP principles and create robust, modular code.",
          quizzes: 18,
          image: subjectPlaceholderImage,
          link: "/quiz/oop",
        },
        {
          id: 3,
          name: "Database Management Systems",
          description:
            "Learn to design, implement, and manage efficient databases.",
          quizzes: 30,
          image: subjectPlaceholderImage,
          link: "/quiz/dbms",
        },
        {
          id: 4,
          name: "Operating Systems",
          description:
            "Understand OS concepts and how software interacts with hardware.",
          quizzes: 22,
          image: subjectPlaceholderImage,
          link: "/quiz/os",
        },
        {
          id: 5,
          name: "Computer Networks",
          description:
            "Dive into network protocols, architectures, and communication.",
          quizzes: 28,
          image: subjectPlaceholderImage,
          link: "/quiz/networks",
        },
      ],
    },
    {
      topic: "Advanced",
      subjects: [
        {
          id: 6,
          name: "Design and Analysis of Algorithms",
          description:
            "Advanced algorithm design techniques and performance analysis.",
          quizzes: 20,
          image: subjectPlaceholderImage,
          link: "/quiz/algo-design",
        },
        {
          id: 7,
          name: "Computer Architecture",
          description:
            "In-depth study of computer system architecture and organization.",
          quizzes: 15,
          image: subjectPlaceholderImage,
          link: "/quiz/arch",
        },
        {
          id: 8,
          name: "Web Technology",
          description:
            "Build dynamic web applications using modern web technologies.",
          quizzes: 35,
          image: subjectPlaceholderImage,
          link: "/quiz/web-tech",
        },
        {
          id: 9,
          name: "Discrete Structures",
          description: "Explore mathematical foundations of computer science.",
          quizzes: 24,
          image: subjectPlaceholderImage,
          link: "/quiz/discrete-math",
        },
        {
          id: 10,
          name: "Theory of Automata and Formal Languages",
          description:
            "Understand computation models and formal language theory.",
          quizzes: 19,
          image: subjectPlaceholderImage,
          link: "/quiz/automata",
        },
        {
          id: 11,
          name: "Cryptographic Techniques",
          description:
            "Learn the principles and practices of modern cryptography.",
          quizzes: 21,
          image: subjectPlaceholderImage,
          link: "/quiz/crypto",
        },
      ],
    },
    {
      topic: "Machine Learning",
      subjects: [
        {
          id: 12,
          name: "Machine Learning",
          description:
            "Fundamentals of machine learning algorithms and applications.",
          quizzes: 40,
          image: subjectPlaceholderImage,
          link: "/quiz/ml",
        },
        {
          id: 13,
          name: "Probability and Stochastic Processes",
          description: "Probability theory and stochastic processes for ML.",
          quizzes: 26,
          image: subjectPlaceholderImage,
          link: "/quiz/prob-stats",
        },
        {
          id: 14,
          name: "Deep Learning",
          description: "Deep neural networks, architectures, and applications.",
          quizzes: 38,
          image: subjectPlaceholderImage,
          link: "/quiz/deep-learning",
        },
        {
          id: 15,
          name: "Artificial Intelligence",
          description:
            "Broad overview of AI principles, techniques, and applications.",
          quizzes: 32,
          image: subjectPlaceholderImage,
          link: "/quiz/ai",
        },
        {
          id: 16,
          name: "Gen AI",
          description:
            "Generative AI models, techniques, and creative applications.",
          quizzes: 30,
          image: subjectPlaceholderImage,
          link: "/quiz/gen-ai",
        },
      ],
    },
    {
      topic: "Software Engineering",
      subjects: [
        {
          id: 17,
          name: "System Design",
          description:
            "Principles of large-scale system design and architecture.",
          quizzes: 27,
          image: subjectPlaceholderImage,
          link: "/quiz/system-design",
        },
        {
          id: 18,
          name: "Software Process Models",
          description:
            "Explore various software development process models and methodologies.",
          quizzes: 23,
          image: subjectPlaceholderImage,
          link: "/quiz/process-models",
        },
        {
          id: 19,
          name: "Software Project Management",
          description:
            "Techniques and tools for managing software projects effectively.",
          quizzes: 29,
          image: subjectPlaceholderImage,
          link: "/quiz/project-mgmt",
        },
        {
          id: 20,
          name: "Software Quality & Maintainance",
          description:
            "Ensuring software quality, testing, and maintainability.",
          quizzes: 25,
          image: subjectPlaceholderImage,
          link: "/quiz/quality-maint",
        },
        {
          id: 21,
          name: "Risk management",
          description:
            "Identifying, assessing, and mitigating risks in software development.",
          quizzes: 22,
          image: subjectPlaceholderImage,
          link: "/quiz/risk-mgmt",
        },
      ],
    },
    {
      topic: "Misc",
      subjects: [
        {
          id: 22,
          name: "Puzzles",
          description: "Fun quizzes to sharpen your problem-solving skills.",
          quizzes: 50,
          image: subjectPlaceholderImage,
          link: "/quiz/puzzles",
        },
        {
          id: 23,
          name: "Aptitude",
          description: "Test your general aptitude and reasoning abilities.",
          quizzes: 45,
          image: subjectPlaceholderImage,
          link: "/quiz/aptitude",
        },
        {
          id: 24,
          name: "Logical Reasoning",
          description: "Quizzes focused on logical thinking and deduction.",
          quizzes: 48,
          image: subjectPlaceholderImage,
          link: "/quiz/logical-reasoning",
        },
      ],
    },
  ];

  const filterCategories = [
    "All",
    "Core",
    "Advanced",
    "Machine Learning",
    "Software Engineering",
    "Misc",
  ];

  const filteredSubjectsData =
    activeFilter === "All"
      ? subjectsData
      : subjectsData.filter((category) => category.topic === activeFilter);

  return (
    <SubjectSelectionContainer>
      <SectionTitle>Choose Subject:</SectionTitle>
      <CategoryFilters>
        {filterCategories.map((categoryName) => (
          <FilterButton
            key={categoryName}
            className={activeFilter === categoryName ? "active" : ""} // *** VERIFY className CONDITIONAL ***
            onClick={() => setActiveFilter(categoryName)} // *** VERIFY setActiveFilter CALL ***
          >
            {categoryName}
          </FilterButton>
        ))}
      </CategoryFilters>
      <SubjectsGrid>
        {filteredSubjectsData.map(
          (
            category // *** VERIFY MAPPING OVER filteredSubjectsData ***
          ) =>
            category.subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))
        )}
      </SubjectsGrid>
    </SubjectSelectionContainer>
  );
};

const SubjectCard = ({ subject }) => {
  return (
    <SubjectCardContainer>
      <SubjectCardLink to={subject.link}>
        <SubjectImage src={subject.image} alt={subject.name} />
        <CardContent>
          <SubjectTitle>{subject.name}</SubjectTitle>
          <SubjectDescription>{subject.description}</SubjectDescription>
          <CardBottom>
            <QuizzesAvailable>
              {subject.quizzes} quizzes available
            </QuizzesAvailable>
            <StartButton>Start</StartButton>
          </CardBottom>
        </CardContent>
      </SubjectCardLink>
    </SubjectCardContainer>
  );
};

export default SubjectSelection;
