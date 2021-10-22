import React from "react";
import { useState } from "react";

const FilterString = () => {
  let namesArr = [
    "James",
    "Jessica",
    "Melody",
    "Tyler",
    "Blake",
    "Jennifer",
    "Mark",
    "Maddy",
  ];
  const [userInput, setUserInput] = useState("");
  const [filterText, setFilterText] = useState("Filtered Names: []");

  function clickHandler() {
    let newNamesArr = [];

    namesArr.forEach((name) => {
      if (name.includes(userInput)) {
        console.log("It did include");
        newNamesArr.push(" " + name);
      } else {
        console.log("This name was not pushed");
      }
    });
    console.log("New Array Names", newNamesArr);
    setFilterText(`Filtered Names: ${newNamesArr}`);
  }

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
      <p>
        Names: ["James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer",
        "Mark", "Maddy"]
      </p>
      <span className="puzzleText"></span>
      <input
        className="inputLine"
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="confirmationButton" onClick={clickHandler}>
        Filter
      </button>
      <span className="resultsBox filterStringRB">{filterText}</span>
    </div>
  );
};

export default FilterString;
