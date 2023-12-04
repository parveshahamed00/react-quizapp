import { useState } from "react";
import { questions } from "./questions";

function App() {
  const [questionNo, setQuestionNo] = useState(0);
  const currentQn = questions[questionNo];
  const [score, setScore] = useState(0);
  const[showScore,setShowScore]=useState(false)
  // console.log(questions);
  console.log(questionNo);

  function selectOption(index) {
    console.log(index);
    if (currentQn.answer === index) {
      setScore(score + 1);
    }
    const nqo=questionNo+1
    if (nqo<questions.length) {
      setQuestionNo(questionNo + 1);
    }else{
      // console.log("result Score : ", score);
      setShowScore(true)
    }
  }
  return (
    <div className="App">
      {
        showScore?<div className="scoreBoard"><h1>Your Total score : {score}</h1></div>:(
<div className="container">
        <h1>{currentQn.question}</h1>
        <div className="options">
          {currentQn.options.map((option, i) => {
            return (
              <div key={i} className="option" onClick={() => selectOption(i)}>
                {option}
              </div>
            );
          })}
        </div>
      </div>
        )
      }
      
    </div>
  );
}

export default App;
