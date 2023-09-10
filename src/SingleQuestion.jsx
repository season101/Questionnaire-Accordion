import React from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
// AiOutlinePlus
const SingleQuestion = ({ id, title, info }) => {
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn">
          <AiOutlineMinus />
        </button>
      </header>
      <p>{info}</p>
    </article>
  );
};

export default SingleQuestion;
