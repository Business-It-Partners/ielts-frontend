import React from 'react';
import styled from 'styled-components';
import { Star, Tag, Eye } from 'lucide-react';

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #2c3e50;
  padding: 40px;
  color: white;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 40px;
  font-weight: normal;
`;

const TipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const TipCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  color: #333;
  display: flex;
`;



const TipContent = styled.div`
  padding: 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const TipTitle = styled.h3`
  font-size: 16px;
  color: #2c3e50;
  margin: 0 0 5px 0;
  font-weight: bold;
`;

const TipDescription = styled.p`
  font-size: 12px;
  margin: 0 0 10px 0;
  color: #555;
  flex-grow: 1;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #f39c12;
  margin-bottom: 5px;
`;

const RatingText = styled.span`
  margin-right: 5px;
`;

const VoteCount = styled.span`
  color: #7f8c8d;
  font-size: 12px;
  margin-left: 5px;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #7f8c8d;
`;

const ViewCount = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #7f8c8d;
  margin-left: auto;
`;

const StarRating = ({ rating }) => {
  return (
    <Rating>
      <RatingText>{rating.toFixed(1)}</RatingText>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < Math.floor(rating) ? "#f39c12" : "none"}
          color={i < Math.floor(rating) ? "#f39c12" : "#bdc3c7"}
        />
      ))}
    </Rating>
  );
};

const Tip = ({ image, title, description, rating, votes, tag, views }) => (
  <TipCard>
    {/* <TipImage src={image} alt={title} /> */}
    <TipContent>
      <TipTitle>{title}</TipTitle>
      <Rating>
        <StarRating rating={rating} />
        <VoteCount>({votes.toLocaleString()} votes)</VoteCount>
      </Rating>
      <TipDescription>{description}</TipDescription>
      <TagContainer>
        <Tag size={14} color="#7f8c8d" />
        <span style={{ marginLeft: '5px' }}>{tag}</span>
        <ViewCount>
          <Eye size={14} color="#7f8c8d" />
          <span style={{ marginLeft: '5px' }}>{views.toLocaleString()}</span>
        </ViewCount>
      </TagContainer>
    </TipContent>
  </TipCard>
);

const SeeMoreButton = styled.button`
  background-color: #f39c12;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const IELTSTipOfTheDay = () => {
  const tips = [
    {
      image: "/api/placeholder/100/100?text=Listening",
      title: "5 Penalty Areas for Indian Students in IELTS Listening",
      description: "Since Indian students are writing and speaking in English with Indian accent, with not much exposure to foreign accent, it can be the cause of s...",
      rating: 3.5,
      votes: 302,
      tag: "Listening Tips",
      views: 81611
    },
    {
      image: "/api/placeholder/100/100?text=Vocabulary",
      title: "110 IELTS Words, IELTS Vocabulary List",
      description: "1.analogy 2.analysis 3.analyze 4.annotate 5.anticipate 6.application 7.apply 8.approach 9.associate 10.assume 11.assumpt...",
      rating: 3.3,
      votes: 913,
      tag: "Reading Tips",
      views: 186639
    },
    {
      image: "/api/placeholder/100/100?text=Spelling",
      title: "Common Spelling Errors and How to Avoid Them",
      description: "Many students often make mistakes in writing some words incorrectly as they are ambiguous about their spellings. Committing spelling errors can...",
      rating: 3.3,
      votes: 249,
      tag: "Writing Tips",
      views: 74830
    },
    {
      image: "/api/placeholder/100/100?text=Pronunciation",
      title: "How To Improve Your Pronunciation",
      description: "Below we share with you ten tips that will help improve your pronunciations 1. Decide on the option of English English has different ways of pro...",
      rating: 3.5,
      votes: 336,
      tag: "Speaking tips",
      views: 47811
    }
  ];

  return (
    <Container>
      <Title>IELTS tip of the day</Title>
      <TipGrid>
        {tips.map((tip, index) => (
          <Tip key={index} {...tip} />
        ))}
      </TipGrid>
      <SeeMoreButton>See more</SeeMoreButton>
    </Container>
  );
};

export default IELTSTipOfTheDay;