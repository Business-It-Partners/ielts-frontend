import React, { useState, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Button, message, Input } from 'antd';
import styled from 'styled-components';
import { readingData } from './readingData';
import TrueFalseQuestion from './questionTypes/TrueFalseQuestion';
import FillInTheBlankQuestion from './questionTypes/FillInBlanksQuestion';
import FillInParagraphQuestion from './questionTypes/FillInParagraphQuestion';
import MCQQuestion from './questionTypes/MCQQuestion';
import HeadingMatchingQuestion from './questionTypes/MatchingHeadings';
import { changePart, answerQuestion } from '../utils/actions';
import Timer from './Timer';
import Footer from './Footer';
import PassageContainer from './PassageContainer';
import { ArrowLeftRight } from 'lucide-react';  // Import the ArrowLeftRight icon from Lucide React


const { Title, Paragraph } = Typography;

const ReadingSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

const TimerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: white;
  // padding: 10px 0;
  border-bottom: 1px solid #d9d9d9;
`;

const ContentContainer = styled.div`
  display: flex;
  position: relative;
  height: calc(100vh - 120px);
  margin-top: 60px;
  // margin-bottom: 60px;
  overflow: hidden;
`;

const StyledPassageContainer = styled.div`
  width: ${props => props.width}%;
  padding-right: 20px;
  overflow-y: auto;
  height: 100%;
`;

const QuestionsContainer = styled.div`
  width: ${props => 100 - props.passageWidth}%;
  padding-left: 20px;
  overflow-y: auto;
  height: 100%;
`;

const Divider = styled.div`
  width: 12px;
  background-color: #f0f0f0;
  cursor: col-resize;
  height: 100%;
  // position: absolute;
  left: ${props => props.left}%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResizeIcon = styled.div`
  width: 40px;
  height: 34px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  // border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 16px;
    height: 16px;
    color: #666;
    font-weight:600;
  }
`;

const QuestionSet = styled.div`
  margin-bottom: 30px;
`;



const ReadingSection = () => {
  const [passageWidth, setPassageWidth] = useState(50);
  const currentPart = useSelector(state => state.currentPart);
  const answers = useSelector(state => state.answers);
  const [isTestEnded, setIsTestEnded] = useState(false);
  const part = readingData[currentPart];

  const getStructuredAnswers = useCallback(() => {
    return readingData.reduce((acc, part, partIndex) => {
      acc[partIndex] = part.questions.reduce((partAcc, questionSet) => {
        questionSet.questions.forEach(question => {
          switch (questionSet.type) {
            case 'trueFalse':
            case 'fillInTheBlank':
            case 'fillInParagraph':
            case 'headingMatching':
              partAcc[question.questionNo] = answers[partIndex]?.[question.questionNo] ?? null;
              break;
            case 'mcq':
              if (questionSet.option === 1) {
                partAcc[question.questionNo] = answers[partIndex]?.[question.questionNo] ?? null;
              } else {
                Object.keys(question.questionNos).forEach(qNo => {
                  partAcc[qNo] = answers[partIndex]?.[qNo] ?? null;
                });
              }
              break;
            default:
              partAcc[question.questionNo] = null;
          }
        });
        return partAcc;
      }, {});
      return acc;
    }, {});
  }, [answers]);

  const handleSubmit = useCallback(() => {
    const structuredAnswers = getStructuredAnswers();
    console.log('Submitted answers:', JSON.stringify(structuredAnswers, null, 2));
    message.success('Test submitted successfully!');
    setIsTestEnded(true);
  }, [getStructuredAnswers]);

  const handleTimeUp = useCallback(() => {
    const structuredAnswers = getStructuredAnswers();
    console.log('Time\'s up! Submitted answers:', JSON.stringify(structuredAnswers, null, 2));
    message.warning('Time\'s up! Test submitted automatically.');
    setIsTestEnded(true);
  }, [getStructuredAnswers]);

  const handleMouseDown = useCallback(() => {
    const handleMouseMove = (e) => {
      const newWidth = (e.clientX / window.innerWidth) * 100;
      setPassageWidth(Math.max(20, Math.min(80, newWidth)));
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  const renderQuestionSet = (questionSet, index) => {
    switch (questionSet.type) {
      case 'trueFalse':
        return (
          <QuestionSet key={index}>
            <Title level={4}>Questions {questionSet.questions[0].questionNo}-{questionSet.questions[questionSet.questions.length - 1].questionNo}</Title>
            <Paragraph>{questionSet.instruction}</Paragraph>
            <Paragraph strong>{questionSet.title}</Paragraph>
            {questionSet.questions.map(question => (
              <TrueFalseQuestion 
                key={question.questionNo} 
                question={question}
                partIndex={currentPart}
              />
            ))}
          </QuestionSet>
        );
      case 'fillInTheBlank':
        return (
          <QuestionSet key={index}>
            <Title level={4}>Questions {questionSet.questions[0].questionNo}-{questionSet.questions[questionSet.questions.length - 1].questionNo}</Title>
            <Paragraph>{questionSet.instruction}</Paragraph>
            <Paragraph strong>{questionSet.title}</Paragraph>
            {questionSet.questions.map(question => (
              <FillInTheBlankQuestion 
                key={question.questionNo} 
                question={question}
                partIndex={currentPart}
              />
            ))}
          </QuestionSet>
        );
      case 'fillInParagraph':
        return (
          <QuestionSet key={index}>
            <Title level={4}>Questions {questionSet.questions[0].questionNo}-{questionSet.questions[questionSet.questions.length - 1].questionNo}</Title>
            <Paragraph>{questionSet.instruction}</Paragraph>
            <FillInParagraphQuestion 
              questionSet={questionSet}
              partIndex={currentPart}
            />
          </QuestionSet>
        );
      case 'mcq':
        return (
          <QuestionSet key={index}>
            <Title level={4}>
              Questions {
                questionSet.questions[0].questionNo || 
                Object.keys(questionSet.questions[0].questionNos).join(', ')
              }
            </Title>
            <Paragraph>{questionSet.instruction}</Paragraph>
            {questionSet.questions.map(question => (
              <MCQQuestion 
                key={question.questionNo || Object.keys(question.questionNos).join('_')} 
                question={question}
                partIndex={currentPart}
                optionsToSelect={questionSet.option}
              />
            ))}
          </QuestionSet>
        );
      case 'headingMatching':
        return (
          <QuestionSet key={index}>
            <Title level={4}>Questions {questionSet.questions[0].questionNo}-{questionSet.questions[questionSet.questions.length - 1].questionNo}</Title>
            <HeadingMatchingQuestion 
              questionSet={questionSet}
              partIndex={currentPart}
            />
          </QuestionSet>
        );
      default:
        return null;
    }
  };

  return (
    <ReadingSectionContainer>
      <TimerWrapper>
        <Timer totalSeconds={3600} onTimeUp={handleTimeUp} />
      </TimerWrapper>
      <ContentContainer>
        <PassageContainer 
          part={part} 
          passageWidth={passageWidth} 
          currentPart={currentPart}
        />
<Divider onMouseDown={handleMouseDown} left={passageWidth}>
          <ResizeIcon>
            <ArrowLeftRight size={16} />
          </ResizeIcon>
        </Divider>        <QuestionsContainer passageWidth={passageWidth}>
          {part.questions.map(renderQuestionSet)}
        </QuestionsContainer>
      </ContentContainer>
      <Footer onSubmit={handleSubmit} />
    </ReadingSectionContainer>
  );
};

export default ReadingSection;