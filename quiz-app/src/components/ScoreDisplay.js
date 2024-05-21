import React from 'react';

const ScoreDisplay = ({ score, totalQuestions }) => {
  return (
    <div>
      <h3>Your Score:</h3>
      <p>
        {score} out of {totalQuestions}
      </p>
    </div>
  );
};

export default ScoreDisplay;