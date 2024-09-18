import React from 'react';
import styled from 'styled-components';
import { Pencil } from 'lucide-react';

const BannerContainer = styled.div`
  background-color: #ffa726;
  color: #103155;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, sans-serif;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: repeating-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.1) 0px,
      rgba(255, 255, 255, 0.1) 2px,
      transparent 2px,
      transparent 4px
    );
    pointer-events: none;
  }
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
  margin-right: 1rem;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  margin: 0;
  display: flex;
  align-items: center;
`;

const LearnMoreButton = styled.button`
  background-color: #26c6da;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  font-weight: bold;
  margin-right: 0.5rem;
`;

const PoweredBy = styled.span`
  font-size: 0.7rem;
  color: #103155;
  opacity: 0.7;
`;

const IELTSAICheckerBanner = () => {
  return (
    <BannerContainer>
      <LeftContent>
        <Title>IELTS AI Checker</Title>
        <Subtitle>
          Boost your IELTS score with instant feedback on your Writing and Speaking! <Pencil size={16} style={{ marginLeft: '4px' }} />
        </Subtitle>
      </LeftContent>
      <div>
        <LearnMoreButton>Learn more</LearnMoreButton>
        <PoweredBy>Powered by OpenAI</PoweredBy>
      </div>
    </BannerContainer>
  );
};

export default IELTSAICheckerBanner;