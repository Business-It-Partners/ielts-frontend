import React from 'react';
import styled from 'styled-components';
import { GraduationCap, Headphones, BookOpen, PenTool, Mic, Zap, Grid } from 'lucide-react';

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const AcademicTest = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #2c3e50;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 10px 0;
`;

const MockTestButton = styled.button`
  background-color: #dc143c;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const FullMockTestsSection = styled.div`
  margin-bottom: 30px;
`;

const FullMockTestsTitle = styled.h2`
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const EnrollNowButton = styled.button`
  background-color: white;
  color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  margin-left: 10px;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

const MockTestCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const TestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
`;

const TestSection = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto 10px;
  color: ${props => props.color};
`;

const SectionTitle = styled.div`
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const FullTestBar = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FullTestLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  color: #2c3e50;
`;

const ProgressBar = styled.div`
  flex-grow: 1;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin: 0 20px;
  position: relative;

  &::after {
    content: '0%';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    color: #2c3e50;
  }
`;

const StartButton = styled.button`
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const IELTSExamLibrary = () => {
  const testSections = [
    { title: 'Listening', icon: Headphones, color: '#3498db' },
    { title: 'Reading', icon: BookOpen, color: '#2ecc71' },
    { title: 'Writing', icon: PenTool, color: '#f39c12' },
    { title: 'Speaking', icon: Mic, color: '#e74c3c' }
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
        <GraduationCap size={20} style={{marginRight: '10px'}} />
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
                  <section.icon size={40} />
                </IconWrapper>
                <SectionTitle>{section.title}</SectionTitle>
              </TestSection>
            ))}
          </TestGrid>
          
          <FullTestBar>
            <FullTestLabel>
              <Grid size={20} />
              Full Test
            </FullTestLabel>
            <ProgressBar />
            <StartButton>
              <Zap size={16} /> Start
            </StartButton>
          </FullTestBar>
        </MockTestCard>
      ))}
    </Container>
  );
};

export default IELTSExamLibrary;