import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  color: #2c3e50;
  font-size: 24px;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const BenefitItem = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BenefitTitle = styled.h3`
  color: #34495e;
  font-size: 18px;
  margin-bottom: 10px;
`;

const BenefitDescription = styled.p`
  color: #7f8c8d;
  font-size: 14px;
  line-height: 1.5;
`;

const IELTSOnlineTestsBenefits = () => {
  return (
    <Container>
      <Title>Why use IELTS Online Tests?</Title>
      <Grid>
        <BenefitItem>
          <BenefitTitle>Take recent actual IELTS Tests</BenefitTitle>
          <BenefitDescription>
            Real IELTS Listening and IELTS Reading tests based on actual IELTS tests and following the Cambridge IELTS book format.
          </BenefitDescription>
        </BenefitItem>
        <BenefitItem>
          <BenefitTitle>Community-driven</BenefitTitle>
          <BenefitDescription>
            Created by our community of IELTS teachers, previous IELTS examiners and IELTS exam takers.
          </BenefitDescription>
        </BenefitItem>
        <BenefitItem>
          <BenefitTitle>Comprehensive analytics tool</BenefitTitle>
          <BenefitDescription>
            Our IELTS Analytics is a tool that allows you to set a target IELTS band score, analyse your progress and find how to improve.
          </BenefitDescription>
        </BenefitItem>
        <BenefitItem>
          <BenefitTitle>View IELTS Score and Answer Explanations</BenefitTitle>
          <BenefitDescription>
            After taking our IELTS mock tests with real audio, you can check your Listening or Reading band score and view your answer sheets.
          </BenefitDescription>
        </BenefitItem>
        <BenefitItem>
          <BenefitTitle>FREE to use</BenefitTitle>
          <BenefitDescription>
            Our online IELTS tests are always free. We are here to help users for study abroad, immigration and finding jobs.
          </BenefitDescription>
        </BenefitItem>
        <BenefitItem>
          <BenefitTitle>Increase your IELTS band score</BenefitTitle>
          <BenefitDescription>
            Using our online tests for IELTS preparation is proven to help students improve by 0.5 - 1.5 .
          </BenefitDescription>
        </BenefitItem>
      </Grid>
    </Container>
  );
};

export default IELTSOnlineTestsBenefits;