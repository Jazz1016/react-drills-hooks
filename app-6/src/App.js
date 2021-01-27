import React, { useState } from "react";
import Todo from "./components/Todo";

const App = () => {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);
  let list = arr.map((el, i) => {
    return <Todo key={i} item={el} />;
  });
  return (
    <div>
      <h4>My to-do list:</h4>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />{" "}
      <button
        onClick={(e) => {
          setArr([arr, input]);
        }}
      >
        Add
      </button>
      <section>{list}</section>
    </div>
  );
};

export default App;
