// src/pages/Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaCalculator, FaAtom, FaFlask } from "react-icons/fa";
import HeroSection from "../components/HeroSection";
import RecentSubjects from "../components/RecentSubjects";
import SubjectSelection from "../components/SubjectSelection";

const Home = () => {
  const [accentColor, setAccentColor] = useState("red");

  return (
    <HomeContainer accentColor={accentColor}>
      <HeroSection setAccentColor={setAccentColor} />
      <RecentSubjects />
      <SubjectSelection />

      <SubjectSection>
        {" "}
        {/* SubjectSection (remains - To be Removed) */}
        <SectionTitle>All Subjects (Old - To be Removed)</SectionTitle>
        <SubjectGrid>
          <SubjectCard
            to="/quiz/math"
            subject="Math"
            icon={<FaCalculator size={40} />}
          />
          <SubjectCard
            to="/quiz/physics"
            subject="Physics"
            icon={<FaAtom size={40} />}
          />
          <SubjectCard
            to="/quiz/chemistry"
            subject="Chemistry"
            icon={<FaFlask size={40} />}
          />
          {/* Add more SubjectCard components here for other subjects */}
        </SubjectGrid>
      </SubjectSection>

      <DashboardLinkSection>
        <StyledLink to="/dashboard">
          <DashboardButton>View Dashboard</DashboardButton>
        </StyledLink>
      </DashboardLinkSection>
    </HomeContainer>
  );
};

export default Home;

// --- Reusable Subject Card Component (Old - To be Removed) ---
const SubjectCard = ({ to, subject, icon }) => (
  <SubjectLink to={to}>
    <Card className="card">
      <IconContainer>{icon}</IconContainer>
      <SubjectName>{subject}</SubjectName>
      <StartButton>Start Quiz</StartButton>
    </Card>
  </SubjectLink>
);

// --- Styled Components ---
const HomeContainer = styled.div`
  padding: ${({ theme }) => theme.padding} 30px; /* Added horizontal padding to HomeContainer */
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px; /* Added max-width to control page width */
  margin: 0 auto; /* Center the HomeContainer on the page */
`;

const SubjectSection = styled.section`
  margin-bottom: 30px;
  width: 100%;
  max-width: 960px;
  scroll-margin-top: 100px;
`;
SubjectSection.defaultProps = { id: "subject-section" };

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin-bottom: 25px;
`;

const SubjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  justify-items: center;
`;

const SubjectLink = styled(Link)`
  text-decoration: none;
  display: block;
  width: 100%;
`;

const Card = styled.div`
  /* Reusing .card class from GlobalStyles for base card styling */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconContainer = styled.div`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.primary};
`;

const SubjectName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
`;

const StartButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: #fff;
  padding: 12px 25px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`;

const DashboardLinkSection = styled.section`
  margin-top: 30px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
`;

const DashboardButton = styled.button`
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.text};

  &:hover {
    background: ${({ theme }) => theme.accentHover};
    color: #fff;
  }
`;
