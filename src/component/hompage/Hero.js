import React from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroWrapper = styled.section`
  background: linear-gradient(to right, #0b2545 0%, #13315c 100%);
  color: white;
  padding: 2rem 4rem;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
  line-height: 1.2;

  strong {
    font-weight: 700;
    display: block;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #64dfdf;
  margin-bottom: 2rem;
  max-width: 600px;
`;
const StartButton = styled(Link)`
  background-color: #f4a261;
  color: #ffffff;
  border: none;
  padding: 0.75rem 2.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: #e76f51;
  }
`;

const UserCount = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  font-size: 0.9rem;
`;

const UserIcons = styled.div`
  display: flex;
  margin-right: 0.5rem;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid white;
    margin-right: -8px;
  }
`;

const PlanetIcon = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, #64dfdf 0%, #0077b6 100%);
  border-radius: 50%;

  &::after {
    content: '';
    position: absolute;
    top: 15%;
    left: 60%;
    width: 40%;
    height: 40%;
    background: #48cae4;
    border-radius: 50%;
    transform: rotate(-45deg);
  }
`;

const NavArrow = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const LeftArrow = styled(NavArrow)`
  left: 1rem;
`;

const RightArrow = styled(NavArrow)`
  right: 1rem;
`;

const HighlightedText = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0 0.5rem;
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <Content>
        <Title>
          WE TAKE YOUR<br />
          <strong>IELTS SCORE HIGHER</strong>
        </Title>
        <Subtitle>
          Get ready for your 2024 IELTS exam by practicing our 100+ IELTS mock tests <HighlightedText>for FREE.</HighlightedText>
        </Subtitle>
        <StartButton to="/student-portal">START NOW</StartButton>
        <UserCount>
          <UserIcons>
            <img src="/api/placeholder/24/24" alt="User 1" />
            <img src="/api/placeholder/24/24" alt="User 2" />
            <img src="/api/placeholder/24/24" alt="User 3" />
          </UserIcons>
          <Users size={18} style={{ marginRight: '0.5rem' }} />
          28,000,000 students are using our free services.
        </UserCount>
      </Content>
      <PlanetIcon />
      <LeftArrow>
        <ChevronLeft size={24} />
      </LeftArrow>
      <RightArrow>
        <ChevronRight size={24} />
      </RightArrow>
    </HeroWrapper>
  );
};

export default HeroSection;