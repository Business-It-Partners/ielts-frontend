import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Segoe UI', Arial, sans-serif;
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
`;

const Title = styled.h2`
  color: #34495e;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 50px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #5d6d7e;
  font-weight: 400;
`;

const IELTSPrepStatistics = () => {
  const stats = [
    { number: "120+", label: "Countries" },
    { number: "28.000.000+", label: "Test Takers" },
    { number: "7.000.000+", label: "Completed Tests" },
    { number: "100+", label: "Academic Tests" },
    { number: "20+", label: "General Training Tests" },
    { number: "10,000+", label: "Total Questions" },
  ];

  return (
    <Container>
      <Title>Number #1 for IELTS Preparation</Title>
      <StatsGrid>
        {stats.map((stat, index) => (
          <StatItem key={index}>
            <StatNumber>{stat.number}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatItem>
        ))}
      </StatsGrid>
    </Container>
  );
};

export default IELTSPrepStatistics;