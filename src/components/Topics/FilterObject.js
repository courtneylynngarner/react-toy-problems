import React from "react";
import { useState } from "react";
const FilterObject = () => {
  let originalArr = [
    { name: "Courtney Lynn", occupation: "The Queen" },
    { name: "Mia Lynn", hobbies: "painting" },
    { name: "Stephen", hobbies: "cereal" },
  ];

  const [userInput, setUserInput] = useState("");
  const [filterText, setFilterText] = useState("Filtered: []");

  function clickHandler() {
    console.log(userInput);
    const filteredArr = originalArr.filter((item) => {
      return userInput in item;
    });
    console.log(filteredArr);
    setFilterText(`Filtered: [${JSON.stringify(filteredArr)}]`);
  }
  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Filter Objects</h4>
      <p className="original-arr"> Original: {JSON.stringify(originalArr)}</p>
      <input
        className="inputLine"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
      <button className="confirmationButton" onClick={clickHandler}>
        Filter
      </button>
      <span className="resultsBox filterObjectRB">{filterText}</span>
    </div>
  );
};

export default FilterObject;
