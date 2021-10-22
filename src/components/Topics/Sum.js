import React from "react";
import { useState } from "react";

const Sum = () => {
  const [topNumber, setTopNumber] = useState(0);
  const [bottomNumber, setBottomNumber] = useState(0);
  const [result, setResult] = useState("Sum:");

  function clickHandler() {
    setResult(`Sum: ${+topNumber + +bottomNumber}`);
  }
  return (
    <div className="puzzleBox sumPB">
      <h4>Sum</h4>
      <input
        type="number"
        value={topNumber}
        onChange={(e) => setTopNumber(e.target.value)}
        className="inputLine"
      />
      <input
        type="number"
        value={bottomNumber}
        onChange={(e) => setBottomNumber(e.target.value)}
        className="inputLine"
      />
      <button className="confirmationButton" onClick={clickHandler}>
        Add
      </button>
      <span className="resultsBox">{result}</span>
    </div>
  );
};

export default Sum;
