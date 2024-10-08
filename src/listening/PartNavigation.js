import React from 'react';
import styled from 'styled-components';

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
  justify-content: space-between;
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

  &:hover {
    background-color: #f5f5f5;
  }
`;

const PartTitle = styled.div`
  font-weight: ${props => props.isActive ? '600' : '400'};
  margin-right: 8px;
  color: ${props => props.isActive ? '#1890ff' : 'inherit'};
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
  background-color: ${props => props.isAnswered ? '#1890ff' : 'transparent'};
  color: ${props => props.isAnswered ? '#ffffff' : '#333333'};
  border: 1px solid ${props => props.isAnswered ? '#1890ff' : '#d9d9d9'};
  cursor: pointer;
  font-weight: 400;

  &:hover {
    background-color: ${props => props.isAnswered ? '#40a9ff' : '#f0f0f0'};
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

const SubmitButton = styled.button`
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

const PartNavigation = ({ parts, currentPart, onPartChange, onQuestionClick, answers, onSubmit }) => {
  const getQuestionNumbers = (part) => {
    return part.questions.flatMap(qs => qs.questions.map(q => q.questionNo));
  };

  const getProgressRatio = (part) => {
    const questionNumbers = getQuestionNumbers(part);
    const answeredCount = questionNumbers.filter(qNo => answers[qNo] !== undefined && answers[qNo] !== '').length;
    return `${answeredCount} of ${questionNumbers.length}`;
  };

  const isQuestionAnswered = (questionNo) => {
    return answers[questionNo] !== undefined && answers[questionNo] !== '';
  };

  return (
    <FooterNav>
      <PartOptionsContainer>
        {parts.map((part, index) => (
          <PartOption
            key={index}
            onClick={() => onPartChange(index + 1)}
            isActive={currentPart === index + 1}
          >
            <PartTitle isActive={currentPart === index + 1}>Part {index + 1}</PartTitle>
            {currentPart === index + 1 ? (
              <QuestionNumbersContainer>
                {getQuestionNumbers(part).map(questionNo => (
                  <QuestionNumber
                    key={questionNo}
                    isAnswered={isQuestionAnswered(questionNo)}
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuestionClick(questionNo);
                    }}
                    aria-label={`Question ${questionNo}, ${isQuestionAnswered(questionNo) ? 'answered' : 'not answered'}`}
                  >
                    {questionNo}
                  </QuestionNumber>
                ))}
              </QuestionNumbersContainer>
            ) : (
              <ProgressRatio>{getProgressRatio(part)}</ProgressRatio>
            )}
          </PartOption>
        ))}
      </PartOptionsContainer>
      <SubmitButtonContainer>
        <SubmitButton onClick={onSubmit}>
          Submit Test
        </SubmitButton>
      </SubmitButtonContainer>
    </FooterNav>
  );
};

export default PartNavigation;