import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'antd';
import { changePart } from '../utils/actions';
import { readingData } from './readingData';

// ... (keep all the styled components as they are)

const FooterNav = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  z-index: 1000;
  height: 50px;
  font-family: Arial, sans-serif;
`;

const PartOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  width: 85%;
  height: 100%;
`;

const PartOption = styled.div`
  width: max-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #333333;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
  // border-left: 1px solid #e0e0e0;
  // border-right: 1px solid #e0e0e0;
  padding: 0 15px;
  overflow-y: hidden;
  background-color: ${props => props.active ? '#f5f5f5' : 'white'};

  &:hover {
    background-color: #f5f5f5;
  }
`;

const PartTitle = styled.div`
  font-weight: ${props => props.active ? '600' : '400'};
  margin-right: 8px;
  color: ${props => props.active ? '#1890ff' : 'inherit'};
  font-size: 14px;
`;

const QuestionNumbersContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  overflow-x: auto;
  max-width: calc(100% - 80px);
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const QuestionNumber = styled.div`
  font-size: 12px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  background-color: ${props => props.attempted ? '#1890ff' : 'transparent'};
  color: ${props => props.attempted ? '#ffffff' : '#333333'};
  border: 1px solid ${props => props.attempted ? '#1890ff' : '#d9d9d9'};
  cursor: pointer;
  font-weight: 400;

  &:hover {
    background-color: ${props => props.attempted ? '#40a9ff' : '#f0f0f0'};
  }
`;

const ProgressRatio = styled.div`
  font-size: 14px;
  color: #666666;
`;

const SubmitButtonContainer = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  height: 36px;
  background-color: #1890ff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background-color: #40a9ff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;

const Footer = ({ onSubmit }) => {
  const currentPart = useSelector(state => state.currentPart);
  const answeredQuestions = useSelector(state => state.answeredQuestions);
  const dispatch = useDispatch();

  const handlePartChange = (partIndex) => {
    dispatch(changePart(partIndex));
  };

  const getTotalQuestions = (part) => 
    part.questions.reduce((acc, questionSet) => {
      if (questionSet.type === 'mcq' && questionSet.option > 1) {
        return acc + Object.keys(questionSet.questions[0].questionNos).length;
      }
      return acc + questionSet.questions.length;
    }, 0);

  const getSolvedQuestions = (partIndex) => 
    Object.keys(answeredQuestions[partIndex] || {}).length;

  const getQuestionNumbers = (part) => {
    return part.questions.flatMap(questionSet => {
      if (questionSet.type === 'mcq' && questionSet.option > 1) {
        return Object.keys(questionSet.questions[0].questionNos);
      }
      return questionSet.questions.map(question => question.questionNo.toString());
    });
  };

  return (
    <FooterNav>
      <PartOptionsContainer>
        {readingData.map((part, partIndex) => (
          <PartOption
            key={partIndex}
            onClick={() => handlePartChange(partIndex)}
            active={partIndex === currentPart}
          >
            <PartTitle active={partIndex === currentPart}>
              Part {part.part}
            </PartTitle>
            {partIndex === currentPart ? (
              <QuestionNumbersContainer>
                {getQuestionNumbers(part).map(questionNo => (
                  <QuestionNumber
                    key={questionNo}
                    attempted={answeredQuestions[partIndex]?.[questionNo]}
                  >
                    {questionNo}
                  </QuestionNumber>
                ))}
              </QuestionNumbersContainer>
            ) : (
              <ProgressRatio>
                {getSolvedQuestions(partIndex)} of {getTotalQuestions(part)}
              </ProgressRatio>
            )}
          </PartOption>
        ))}
      </PartOptionsContainer>
      <SubmitButtonContainer>
        <SubmitButton type="primary" onClick={onSubmit}>
          Submit Test
        </SubmitButton>
      </SubmitButtonContainer>
    </FooterNav>
  );
};

export default Footer;