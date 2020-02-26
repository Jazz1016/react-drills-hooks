import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);

  let displayList = arr.map((item, i) => {
    // console.log(el);
    return <Todo item={item} key={i} />;
  });
  return (
    <div>
      <input
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setArr([...arr, input]);
        }}
      >
        Add
      </button>
      {displayList}
    </div>
  );
}

export default App;
