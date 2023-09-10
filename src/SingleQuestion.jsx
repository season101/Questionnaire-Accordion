import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const SingleQuestion = ({ id, title, info, setActiveId, activeId }) => {
  const handleButtonClick = () => {
    if (id === activeId) {
      setActiveId(null);
    } else setActiveId(id);
  };
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={handleButtonClick}>
          {activeId === id ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {activeId === id && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
