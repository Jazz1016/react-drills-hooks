import React, { useState } from "react";
import List from "./List";

function NewTask(props) {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.setList([...props.list, input]);
          setInput("");
        }}
        type="submit"
      >
        Add
      </button>
    </div>
  );
}

export default NewTask;
