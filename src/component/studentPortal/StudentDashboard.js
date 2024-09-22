import React from 'react';
import styled from 'styled-components';
import { Clipboard, BookOpen, Headphones, Book, Edit } from 'lucide-react';

// Dummy data (unchanged)
const fullLengthTests = [
  { id: 1, date: '2023-08-01', overall: 6.5, listening: 6.5, reading: 7.0, writing: 6.0, speaking: 6.5 },
  { id: 2, date: '2023-09-01', overall: 7.0, listening: 7.0, reading: 7.5, writing: 6.5, speaking: 7.0 },
  { id: 3, date: '2023-10-01', overall: 7.5, listening: 7.5, reading: 8.0, writing: 7.0, speaking: 7.5 },
];

const listeningTests = [
  { id: 1, date: '2023-08-15', score: 7.0 },
  { id: 2, date: '2023-09-15', score: 7.5 },
  { id: 3, date: '2023-10-15', score: 8.0 },
];

const readingTests = [
  { id: 1, date: '2023-08-20', score: 7.5 },
  { id: 2, date: '2023-09-20', score: 8.0 },
  { id: 3, date: '2023-10-20', score: 8.5 },
];

const writingTests = [
  { id: 1, date: '2023-08-25', score: 6.5 },
  { id: 2, date: '2023-09-25', score: 7.0 },
  { id: 3, date: '2023-10-25', score: 7.5 },
];

// Styled components
const DashboardContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: #333;
  border-bottom: 2px solid #4caf50;
  padding-bottom: 10px;
`;

const Section = styled.section`
  margin-top: 40px;
`;

const SectionTitle = styled.h2`
  color: #4caf50;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  background-color: #4caf50;
  color: white;
  padding: 12px;
  text-align: left;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;

const SegmentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SegmentSection = styled.div`
  width: 30%;
  min-width: 250px;
  margin-bottom: 20px;
`;

const SegmentTitle = styled.h3`
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const EnhancedDashboard = () => {
  return (
    <DashboardContainer>
      <Title>IELTS Progress Dashboard</Title>
      
      <Section>
        <SectionTitle>
          <Clipboard size={24} />
          Full-Length Mock Test History
        </SectionTitle>
        <Table>
          <thead>
            <Tr>
              <Th>Date</Th>
              <Th>Overall</Th>
              <Th>Listening</Th>
              <Th>Reading</Th>
              <Th>Writing</Th>
              <Th>Speaking</Th>
            </Tr>
          </thead>
          <tbody>
            {fullLengthTests.map((test) => (
              <Tr key={test.id}>
                <Td>{test.date}</Td>
                <Td>{test.overall}</Td>
                <Td>{test.listening}</Td>
                <Td>{test.reading}</Td>
                <Td>{test.writing}</Td>
                <Td>{test.speaking}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Section>

      <Section>
        <SectionTitle>
          <BookOpen size={24} />
          Segment-wise Test Records
        </SectionTitle>
        <SegmentContainer>
          <SegmentSection>
            <SegmentTitle>
              <Headphones size={20} />
              Listening Tests
            </SegmentTitle>
            <Table>
              <thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Score</Th>
                </Tr>
              </thead>
              <tbody>
                {listeningTests.map((test) => (
                  <Tr key={test.id}>
                    <Td>{test.date}</Td>
                    <Td>{test.score}</Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </SegmentSection>
          <SegmentSection>
            <SegmentTitle>
              <Book size={20} />
              Reading Tests
            </SegmentTitle>
            <Table>
              <thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Score</Th>
                </Tr>
              </thead>
              <tbody>
                {readingTests.map((test) => (
                  <Tr key={test.id}>
                    <Td>{test.date}</Td>
                    <Td>{test.score}</Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </SegmentSection>
          <SegmentSection>
            <SegmentTitle>
              <Edit size={20} />
              Writing Tests
            </SegmentTitle>
            <Table>
              <thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Score</Th>
                </Tr>
              </thead>
              <tbody>
                {writingTests.map((test) => (
                  <Tr key={test.id}>
                    <Td>{test.date}</Td>
                    <Td>{test.score}</Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </SegmentSection>
        </SegmentContainer>
      </Section>
    </DashboardContainer>
  );
};

export default EnhancedDashboard;