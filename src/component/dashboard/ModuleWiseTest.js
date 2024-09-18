import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GraduationCap, MessageCircle, PenTool, BookOpen, Headphones, Mic, Lock } from 'lucide-react';

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #333;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 10px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background-color: ${props => props.active ? '#dc143c' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-size: 14px;
`;

const TestCount = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 16px;
`;

const MockTestTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;
`;

const GreenButton = styled(Button)`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  margin-bottom: 20px;
`;

const TestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const TestCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TestIcon = styled.div`
  background-color: #4CAF50;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TestName = styled.span`
  font-weight: bold;
  color: #333;
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #666;
`;

const ModuleWiseTest = () => {
  const [activeTestType, setActiveTestType] = useState('speaking');
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  const testTypes = [
    { type: 'speaking', icon: MessageCircle, label: 'Speaking' },
    { type: 'writing', icon: PenTool, label: 'Writing' },
    { type: 'reading', icon: BookOpen, label: 'Reading' },
    { type: 'listening', icon: Headphones, label: 'Listening' },
  ];

  useEffect(() => {
    const fetchTests = async () => {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const newTests = Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        name: `${activeTestType.toUpperCase()} TEST ${i + 1}`,
      }));
      setTests(newTests);
      setLoading(false);
    };

    fetchTests();
  }, [activeTestType]);

  const handleTestTypeClick = (type) => {
    setActiveTestType(type);
  };

  const handleTestCardClick = (testId) => {
    console.log(`Clicked on test with ID: ${testId}`);
    // Here you would typically navigate to the specific test page
    // For example: history.push(`/test/${activeTestType}/${testId}`);
  };

  return (
    <Container>
      <Title>Module Wise Test</Title>
      
      <Section>
        <SectionTitle>
          <GraduationCap size={20} style={{marginRight: '10px'}} />
          Academic Test
        </SectionTitle>
        <Divider />
        
        <ButtonGroup>
          {testTypes.map(({ type, icon: Icon, label }) => (
            <Button
              key={type}
              active={activeTestType === type}
              onClick={() => handleTestTypeClick(type)}
            >
              <Icon size={16} /> {label}
            </Button>
          ))}
        </ButtonGroup>
        
        {loading ? (
          <LoadingMessage>Loading tests...</LoadingMessage>
        ) : (
          <>
            <TestCount>{tests.length} Tests</TestCount>
            <Divider />
            
            <MockTestTitle>{tests.length} {activeTestType.charAt(0).toUpperCase() + activeTestType.slice(1)} Mock Tests</MockTestTitle>
            
            <GreenButton>
              {tests.length} {activeTestType.charAt(0).toUpperCase() + activeTestType.slice(1)} Tests
            </GreenButton>
            
            <TestGrid>
              {tests.map(test => (
                <TestCard key={test.id} onClick={() => handleTestCardClick(test.id)}>
                  <TestIcon>
                    <Mic size={24} color="white" />
                  </TestIcon>
                  <TestName>{test.name}</TestName>
                  <Lock size={16} color="#1E90FF" />
                </TestCard>
              ))}
            </TestGrid>
          </>
        )}
      </Section>
    </Container>
  );
};

export default ModuleWiseTest;