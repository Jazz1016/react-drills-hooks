import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([
    "apply",
    "orange",
    "jar",
    "coin",
    "flyer",
    "wiener",
  ]);
  let listDisplay = arr
    .filter((word) => {
      return word.includes(input);
    })
    .map((word) => {
      return <h2>{word}</h2>;
    });
  return (
    <div>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <section>{listDisplay}</section>
    </div>
  );
}

export default App;
