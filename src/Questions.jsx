import React from 'react';
import SingleQuestion from './SingleQuestion';

const Questions = ({ data, setActiveId, activeId }) => {
  return data.map((d) => {
    return (
      <SingleQuestion
        key={d.id}
        {...d}
        setActiveId={setActiveId}
        activeId={activeId}
      />
    );
  });
};

export default Questions;
