import React from 'react';
import styled from 'styled-components';
import { GraduationCap, Headphones, BookOpen, PenTool, Mic, Zap, Grid } from 'lucide-react';

const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0 auto;
  padding: 14px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 14px;
  color: #2c3e50;
`;

const AcademicTest = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 6px;
  color: #2c3e50;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 6px 0;
`;

const MockTestButton = styled.button`
  background-color: #dc143c;
  color: white;
  border: none;
  border-radius: 14px;
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;
  margin-bottom: 14px;
`;

const FullMockTestsSection = styled.div`
  margin-bottom: 20px;
`;

const FullMockTestsTitle = styled.h2`
  font-size: 18px;
  color: #2c3e50;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
`;

const EnrollNowButton = styled.button`
  background-color: white;
  color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 10px;
  padding: 3px 6px;
  font-size: 10px;
  cursor: pointer;
  margin-left: 6px;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 14px;
  font-size: 12px;
`;

const MockTestCard = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 14px;
  margin-bottom: 14px;
`;

const TestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-bottom: 14px;
`;

const TestSection = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 14px;
  text-align: center;
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  margin: 0 auto 6px;
  color: ${props => props.color};
`;

const SectionTitle = styled.div`
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 6px;
  font-size: 12px;
`;

const FullTestBar = styled.div`
  background-color: #f0f0f0;
  border-radius: 6px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:70%;
`;

const FullTestLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: bold;
  color: #2c3e50;
  font-size: 12px;
`;

const ProgressBar = styled.div`
  flex-grow: 1;
  height: 5px;
  background-color: #e0e0e0;
  border-radius: 2px;
  margin: 0 14px;
  position: relative;

  &::after {
    content: '0%';
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    color: #2c3e50;
    font-size: 10px;
  }
`;

const StartButton = styled.button`
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 14px;
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 3px;
`;

const IELTSExamLibrary = () => {
  const testSections = [
    { title: 'Listening', icon: Headphones, color: '#3498db' },
    { title: 'Reading', icon: BookOpen, color: '#2ecc71' },
    { title: 'Writing', icon: PenTool, color: '#f39c12' },
  ];

  const mockTests = [
    "Practice Test 1",
    "Practice Test 2",
    "Practice Test 3",
    "Practice Test 4",
    "Practice Test 5",
  ];

  return (
    <Container>
      <Title>IELTS EXAM LIBRARY</Title>
      
      <AcademicTest>
        <GraduationCap size={14} style={{marginRight: '6px'}} />
        Academic Test
      </AcademicTest>
      <Divider />
      
      <MockTestButton>{mockTests.length} Mock Tests</MockTestButton>
      
      <FullMockTestsSection>
        <FullMockTestsTitle>
          {mockTests.length} Full Mock Tests
          <EnrollNowButton>Enroll Now</EnrollNowButton>
        </FullMockTestsTitle>
        <Description>
          Achieve 8+ Band Score by practicing with our cutting-edge mock tests, and get expert evaluations from our IDP Certified Trainers.
        </Description>
      </FullMockTestsSection>
      
      {mockTests.map((test, testIndex) => (
        <MockTestCard key={testIndex}>
          <Title>{test}</Title>
          <TestGrid>
            {testSections.map((section, sectionIndex) => (
              <TestSection key={sectionIndex}>
                <IconWrapper color={section.color}>
                  <section.icon size={24} />
                </IconWrapper>
                <SectionTitle>{section.title}</SectionTitle>
              </TestSection>
            ))}
          </TestGrid>
          
          <FullTestBar>
            <FullTestLabel>
              <Grid size={14} />
              Full Test
            </FullTestLabel>
            <ProgressBar />
            <StartButton>
              <Zap size={12} /> Start
            </StartButton>
          </FullTestBar>
        </MockTestCard>
      ))}
    </Container>
  );
};

export default IELTSExamLibrary;