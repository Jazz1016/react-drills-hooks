import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([
    "spaghetti",
    "ice cream",
    "sushi",
    "bologna",
    "cheese"
  ]);
  let arrDisplay = arr
    .filter(el => {
      return el.includes(input);
    })
    .map(el => {
      return <h2>{el}</h2>;
    });
  return (
    <div>
      <input
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      {arrDisplay}
    </div>
  );
}

export default App;
