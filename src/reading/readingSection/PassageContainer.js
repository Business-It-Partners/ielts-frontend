import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Input } from 'antd';
import styled from 'styled-components';
import { answerQuestion } from '../utils/actions';

const { Title, Paragraph } = Typography;

const StyledPassageContainer = styled.div`
  width: ${props => props.width}%;
  padding-right: 20px;
  overflow-y: auto;
  height: 100%;
`;

const DroppableInput = styled(Input)`
  width: 100%;
  margin-bottom: 10px;
`;

const PassageContainer = ({ part, passageWidth, currentPart }) => {
  const dispatch = useDispatch();
  const answers = useSelector(state => state.answers[currentPart] || {});

  const headingMatchingQuestionSet = part.questions.find(q => q.type === 'headingMatching');

  const handleHeadingChange = (questionNo, value) => {
    dispatch(answerQuestion(currentPart, questionNo, value));
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event, questionNo) => {
    event.preventDefault();
    const heading = event.dataTransfer.getData('heading');
    const questionSetData = JSON.parse(event.dataTransfer.getData('questionSet'));
    
    if (questionSetData.questions.some(q => q.questionNo === questionNo)) {
      handleHeadingChange(questionNo, heading);
    }
  };

  return (
    <StyledPassageContainer width={passageWidth}>
      <Title level={3}>Part {part.part}</Title>
      {part.passage.map((paragraph, index) => (
        <React.Fragment key={index}>
          {headingMatchingQuestionSet && 
           headingMatchingQuestionSet.questions.some(q => q.paragraphId === paragraph.paragraphId) ? (
            <div>
              <DroppableInput
                placeholder="Drag and drop heading here"
                value={answers[headingMatchingQuestionSet.questions.find(q => q.paragraphId === paragraph.paragraphId).questionNo] || ''}
                onChange={(e) => handleHeadingChange(
                  headingMatchingQuestionSet.questions.find(q => q.paragraphId === paragraph.paragraphId).questionNo,
                  e.target.value
                )}
                onDragOver={onDragOver}
                onDrop={(e) => onDrop(e, headingMatchingQuestionSet.questions.find(q => q.paragraphId === paragraph.paragraphId).questionNo)}
              />
              <Paragraph>{paragraph.text}</Paragraph>
            </div>
          ) : (
            <Paragraph>{paragraph.text}</Paragraph>
          )}
        </React.Fragment>
      ))}
    </StyledPassageContainer>
  );
};

export default PassageContainer;