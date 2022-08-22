import React from "react";

const QuetionsList = ({
  setSelectedOption,
  selectedOption,
  quetion,
  setCorrect,
  correct
}) => {

  const onClickOption = (index) => {
    setSelectedOption(index + 1);
    if (index + 1 === quetion.correct) {
      setCorrect(correct + 1)
    }
  };

  return (
    <div className="quetions-container">
      <h1>{quetion.mainQuetion}</h1>
      <div>
        <ul>
          {quetion.options.map((option, index) => (
            <li key={index}>
              <div
                onClick={() => onClickOption(index)}
                className={`box ${
                  selectedOption === index + 1 ? "active" : ""
                }`}
              ></div>
              <span>{option}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuetionsList;
