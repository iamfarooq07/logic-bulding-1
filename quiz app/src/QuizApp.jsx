import { useState } from "react";

export default function QuizApp() {
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
  const [selected, setSelected] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  const current = questions[index];

  const handleNext = () => {
    if (selected === current.answer) {
      setScore(score + 1);
      setSelected(null);
    } 

    if (index === questions.length - 1) {
      setIsFinished(true);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="w-full max-w-xl bg-gray-800 rounded-2xl p-6 shadow-xl">
        {!isFinished ? (
          <>
            <h1 className="text-2xl font-semibold mb-4">Quiz App</h1>
            <p className="text-lg font-medium mb-6">
              Q{index + 1}. {current.question}
            </p>

            <div className="grid gap-3">
              {current.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelected(opt)}
                  className={`p-3 rounded-xl border transition-all duration-200 hover:bg-gray-700 ${
                    selected === opt
                      ? "bg-blue-600 border-blue-400"
                      : "bg-gray-700 border-gray-600"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={!selected}
              className="mt-6 w-full p-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 rounded-xl text-lg font-semibold"
            >
              {index === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Quiz Finished!</h2>
            <p className="text-xl">
              Your Score: {score} / {questions.length}
            </p>
            <button
              onClick={() => {
                setIndex(0);
                setScore(0);
                setIsFinished(false);
              }}
              className="mt-6 p-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold w-full"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
