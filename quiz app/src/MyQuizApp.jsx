import React, { useState } from "react";

function MyQuizApp() {
  const questions = [
    {
      id: 1,
      question: "What does DOM stand for?",
      options: [
        "Document Object Model",
        "Direct Object Method",
        "Data Object Manager",
        "Document Oriented Module",
      ],
      answer: "Document Object Model",
    },
    {
      id: 2,
      question: "Which keyword declares a constant in JavaScript?",
      options: ["var", "let", "const", "static"],
      answer: "const",
    },
    {
      id: 3,
      question: "Which method converts JSON to an object?",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "parse.JSON()",
        "string.JSON()",
      ],
      answer: "JSON.parse()",
    },
  ];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [seleted, setSelected] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  const current = questions[index];
  //   console.log(current);
  function handleNext() {
    if (seleted === current.answer) {
      setScore(score + 1);
      setSelected(null);
    }

    if (index === questions.length - 1) {
      setIsFinished(true);
    } else {
      setIndex(index + 1);
    }
  }
  return (
    <div>
      {!isFinished ? (
        <>
          <h1>Quiz App</h1>
          <p>{current.question}</p>

          {current.options.map((val) => (
            <button key={val} onClick={() => setSelected(val)}>
              {val}
            </button>
          ))}

          <br />
          <button onClick={handleNext} disabled={!seleted}>
            Next
          </button>
        </>
      ) : (
        <h2>Your Score: {score}</h2>
      )}
    </div>
  );
}

export default MyQuizApp;
