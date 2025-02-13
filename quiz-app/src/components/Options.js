import React from 'react';

const Options = ({ options, handleOptionClick }) => {
  return (
    <div>
      {options.map((option, index) => (
        <button key={index} onClick={() => handleOptionClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;