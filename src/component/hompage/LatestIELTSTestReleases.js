import React from 'react';
import styled from 'styled-components';
import { Star } from 'lucide-react';

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 70px auto;
  
`;

const Title = styled.h2`
  color: #2c3e50;
  font-size: 24px;
  margin-bottom: 40px;
`;

const TestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const TestCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
`;

const TestHeader = styled.div`
  background-color: ${props => props.color};
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const TestTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #ffffff;
  text-align: center;
`;

const TestInfo = styled.div`
  padding: 15px;
  background-color: #ffffff;
  flex-grow: 1;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #f39c12;
`;

const RatingText = styled.span`
  margin-right: 5px;
`;

const VoteCount = styled.span`
  color: #7f8c8d;
  font-size: 12px;
  margin-left: 5px;
`;

const StarRating = ({ rating }) => {
  return (
    <Rating>
      <RatingText>{rating}</RatingText>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < Math.floor(rating) ? "#f39c12" : "none"}
          color={i < Math.floor(rating) ? "#f39c12" : "#bdc3c7"}
        />
      ))}
    </Rating>
  );
};

const TestReleaseCard = ({ color, title, rating, votes }) => (
  <TestCard>
    <TestHeader color={color}>
      <TestTitle>{title}</TestTitle>
    </TestHeader>
    <TestInfo>
      <Rating>
        <StarRating rating={rating} />
        <VoteCount>({votes} votes)</VoteCount>
      </Rating>
    </TestInfo>
  </TestCard>
);

const LatestIELTSTestReleases = () => {
  const testReleases = [
    {
      color: "#34495e",
      title: "IELTS Mock Test 2023 December",
      rating: 3.4,
      votes: 1523
    },
    {
      color: "#34495e",
      title: "IELTS Mock Test 2023 September",
      rating: 3.3,
      votes: 698
    },
    {
      color: "#e74c3c",
      title: "IELTS Practice Tests Volume 8",
      rating: 3.6,
      votes: 1352
    },
    {
      color: "#2c3e50",
      title: "Prepare for IELTS General Training Volume 2",
      rating: 3.3,
      votes: 847
    }
  ];

  return (
    <Container>
      <Title>Latest IELTS test releases:</Title>
      <TestGrid>
        {testReleases.map((test, index) => (
          <TestReleaseCard key={index} {...test} />
        ))}
      </TestGrid>
    </Container>
  );
};

export default LatestIELTSTestReleases;