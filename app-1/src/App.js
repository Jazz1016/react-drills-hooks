import React, { useState } from "react";

function Input() {
  const [Input, setInput] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <section>{Input}</section>
    </div>
  );
}

export default Input;
