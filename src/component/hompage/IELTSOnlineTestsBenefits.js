import React from 'react';
import styled from 'styled-components';

import logo1 from '../../assets/logos/logo1.png';
import logo2 from '../../assets/logos/logo2.png';
import logo3 from '../../assets/logos/logo3.png';
import logo4 from '../../assets/logos/logo4.png';
import logo5 from '../../assets/logos/logo5.png';
import logo6 from '../../assets/logos/logo6.png';

const Container = styled.section`
  background-color: #f8f8f8;
  padding: 2rem;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  color: #23395d;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: left;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const Feature = styled.div`
  text-align: center;
`;

const LogoWrapper = styled.div`
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  color: #23395d;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: #333;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const WhyUseIELTSOnlineTests = () => {
  const features = [
    {
      title: "Take recent actual IELTS Tests",
      description: "Real IELTS Listening and IELTS Reading tests based on actual IELTS tests and following the Cambridge IELTS book format.",
      logo: logo1
    },
    {
      title: "Community-driven",
      description: "Created by our community of IELTS teachers, previous IELTS examiners and IELTS exam takers.",
      logo: logo2
    },
    {
      title: "Comprehensive analytics tool",
      description: "Our IELTS Analytics is a tool that allows you to set a target IELTS band score, analyse your progress and find how to improve.",
      logo: logo3
    },
    {
      title: "View IELTS Score and Answer Explanations",
      description: "After taking our IELTS mock tests with real audio, you can check your Listening or Reading band score and view your answer sheets.",
      logo: logo4
    },
    {
      title: "FREE to use",
      description: "Our online IELTS tests are always free. We are here to help users for study abroad, immigration and finding jobs.",
      logo: logo5
    },
    {
      title: "Increase your IELTS band score",
      description: "Using our online tests for IELTS preparation is proven to help students improve by 0.5 - 1.5 .",
      logo: logo6
    }
  ];

  return (
    <Container>
      <Title>Why use IELTS Online Tests?</Title>
      <Grid>
        {features.map((feature, index) => (
          <Feature key={index}>
            <LogoWrapper>
              <img src={feature.logo} alt={feature.title} width="64" height="64" />
            </LogoWrapper>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </Feature>
        ))}
      </Grid>
    </Container>
  );
};

export default WhyUseIELTSOnlineTests;