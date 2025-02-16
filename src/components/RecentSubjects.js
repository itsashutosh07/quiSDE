// src/components/RecentSubjects.js
import React from "react";
import styled from "styled-components";
import { FaAtom, FaFlask } from "react-icons/fa";

const RecentSubjectsContainer = styled.section`
  padding: 60px 30px; /* Adjusted padding to match SubjectSelection */
  background-color: #000; /* Keep black background */
  color: ${({ theme }) => theme.text};
  margin-top: 40px;
  width: 100%;
  max-width: 1200px; /* Added max-width to match HomeContainer */
  margin-left: auto; /* Center the section horizontally */
  margin-right: auto; /* Center the section horizontally */
`;

const SectionTitle = styled.h2`
  font-family: "Kode Mono", monospace;
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: left;
  padding-left: 0; /* Removed padding-left - section is already horizontally padded */
`;

const SubjectsRow = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 25px;
  padding: 0; /* Removed padding - cards are now aligned to section edges */
  padding-bottom: 15px;
`;

const SubjectCardContainer = styled.div`
  min-width: 400px;
  max-width: 400px;
  background-color: #1e1e1e;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
  scroll-snap-align: start;
  position: relative;
  transition: transform 0.6s ease;

  &.flipped {
    transform: rotateY(180deg);
  }
`;

const CardFront = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  backface-visibility: hidden;
`;

const SubjectHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;

const CardBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #1e1e1e;
  border-radius: 15px;
  padding: 20px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const SubjectIcon = styled.div`
  font-size: 2em;
  margin-right: 10px;
  margin-bottom: 0;
  color: ${({ theme }) => theme.primary};
  align-self: flex-start;
  text-align: left;
`;

const SubjectName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0;
  text-align: left;
  margin-right: auto;
`;

const LastScore = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondaryText};
  text-align: left;
  margin: 0;
  padding: 0;
`;

const InfoText = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;
`;

const BeginButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Kode Mono", monospace;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
  margin-top: 15px;
`;

const RecentSubjects = () => {
  const recentSubjectsData = [
    {
      id: 1,
      name: "Physics",
      icon: <FaAtom />,
      last: "2 days ago",
      score: "85%",
      difficulty: "Medium",
      questions: 10,
    },
    {
      id: 2,
      name: "Chemistry",
      icon: <FaFlask />,
      last: "5 days ago",
      score: "92%",
      difficulty: "Hard",
      questions: 25,
    },
    // ... more subjects
  ];

  return (
    <RecentSubjectsContainer>
      <SectionTitle>Recent Subjects</SectionTitle>
      <SubjectsRow>
        {recentSubjectsData.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </SubjectsRow>
    </RecentSubjectsContainer>
  );
};

const SubjectCard = ({ subject }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <SubjectCardContainer
      className={isFlipped ? "flipped" : ""}
      onClick={handleCardClick}
    >
      <CardFront>
        <SubjectHeader>
          <SubjectIcon>{subject.icon}</SubjectIcon>
          <SubjectName>{subject.name}</SubjectName>
        </SubjectHeader>
        <LastScore>
          Last: {subject.last} · Score: {subject.score}
        </LastScore>
      </CardFront>
      <CardBack>
        <InfoText>Difficulty: {subject.difficulty}</InfoText>
        <InfoText>{subject.questions} Questions</InfoText>
        <BeginButton>Begin</BeginButton>
      </CardBack>
    </SubjectCardContainer>
  );
};

export default RecentSubjects;
