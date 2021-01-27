import React, { useState } from "react";

function App() {
  const [list, useList] = useState([
    "banana",
    "spaghetti",
    "pineapple",
    "pomegranate",
    "orange",
  ]);
  let listDisplay = list.map((word) => {
    return <h1>{word}</h1>;
  });
  return <div>{listDisplay}</div>;
}

export default App;
