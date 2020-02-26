import React, { useState } from "react";

function App() {
  const [arr, setArr] = useState([
    "spaghetti",
    "ice cream",
    "sushi",
    "bologna",
    "cheese"
  ]);
  let arrDisplay = arr.map(el => {
    return <h2>{el}</h2>;
  });
  return <div>{arrDisplay}</div>;
}

export default App;
