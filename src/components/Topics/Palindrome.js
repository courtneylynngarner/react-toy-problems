import React from "react";
import { useState } from "react";

const Palindrome = () => {
  const [userInput, setUserInput] = useState("");
  const [responseText, setResponseText] = useState("Results:");

  function clickHandler() {
    const reverseStr = [];
    let userPhrase = userInput.replace(/\s/g, "").toLowerCase();

    for (let i = userInput.length - 1; i >= 0; i--) {
      if (userInput.charAt(i) === " ") {
        continue;
      }
      reverseStr.push(userInput.toLowerCase().charAt(i));
    }

    if (reverseStr.join("") === userPhrase) {
      setResponseText(`Results: true`);
    } else {
      setResponseText("Results: false");
    }
  }

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Palindrome</h4>
      <input
        className="inputLine"
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="confirmationButton" onClick={clickHandler}>
        Check
      </button>
      <span className="resultsBox">{responseText}</span>
    </div>
  );
};

export default Palindrome;
