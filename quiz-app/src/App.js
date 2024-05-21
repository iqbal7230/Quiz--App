import React, { useState } from 'react';
import questions from './data/Questios';
import Question from './components/ques';
import Options from './components/Options';
import ScoreDisplay from './components/ScoreDisplay';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <ScoreDisplay score={score} totalQuestions={questions.length} />
      ) : (
        <>
          <Question question={questions[currentQuestion]} />
          <Options
            options={questions[currentQuestion].options}
            handleOptionClick={handleOptionClick}
          />
        </>
      )}
    </div>
  );
};

export default App;