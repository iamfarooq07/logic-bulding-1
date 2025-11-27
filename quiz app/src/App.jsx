import { useState } from "react";
import QuizApp from "./QuizApp";
import MyQuizApp from "./MyQuizApp";

function App() {
  const [count, setCount] = useState();

  return (
    <>
      <h1 className="text-2xl bg-red-200 text-center p-4">Hello React</h1>
      {/* <QuizApp /> */}
      <MyQuizApp />
    </>
  );
}

export default App;
