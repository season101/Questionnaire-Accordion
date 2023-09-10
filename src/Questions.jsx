import React from 'react';
import SingleQuestion from './SingleQuestion';

const Questions = ({ data }) => {
  return data.map((d) => {
    return <SingleQuestion key={d.id} {...d} />;
  });
};

export default Questions;
