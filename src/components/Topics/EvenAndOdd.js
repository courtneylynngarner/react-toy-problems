import React from "react";
import { useState } from "react";

const EvenAndOdd = () => {
  const [evenArray, setEvenArray] = useState("Evens: []");
  const [oddArray, setOddArray] = useState("Odds: []");
  const [userInput, setUserInput] = useState("");

  function clickHandler(userInput) {
    let evens = "";
    let odds = "";
    let splitUserInput = userInput.split(",");
    splitUserInput.forEach((num) => {
      if (+num % 2 === 0) {
        evens += evens.length === 0 ? num : `, ${num}`;
      } else {
        odds += odds.length === 0 ? num : `, ${num}`;
      }
    });

    setEvenArray(`Evens: [${evens}]`);
    setOddArray(`Odds: [${odds}]`);
  }
  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Even and Odds</h4>
      <input
        className="inputLine"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
      <button
        className="confirmationButton"
        onClick={() => clickHandler(userInput)}
      >
        Split
      </button>
      <span className="resultsBox">{evenArray}</span>
      <span className="resultsBox">{oddArray}</span>
    </div>
  );
};

export default EvenAndOdd;
