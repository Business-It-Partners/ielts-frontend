import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../../utils/actions';

const HeadingList = styled.div`
  margin-top: 10px;
`;

const HeadingItem = styled.div`
  margin-bottom: 5px;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  cursor: pointer;
`;

const HeadingMatchingQuestion = ({ questionSet, partIndex }) => {
  const dispatch = useDispatch();
  const answers = useSelector(state => state.answers[partIndex] || {});

  const onDragStart = (event, heading) => {
    event.dataTransfer.setData('heading', heading);
    event.dataTransfer.setData('questionSet', JSON.stringify(questionSet));
  };

  return (
    <>
      <p>{questionSet.instruction}</p>
      <strong>List of Headings:</strong>
      <HeadingList>
        {questionSet.headings.map((heading, index) => (
          <HeadingItem 
            key={index} 
            draggable 
            onDragStart={(event) => onDragStart(event, heading)}
          >
            {heading}
          </HeadingItem>
        ))}
      </HeadingList>
    </>
  );
};

export default HeadingMatchingQuestion;