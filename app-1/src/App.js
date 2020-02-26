import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <section>{input}</section>
    </div>
  );
}

export default App;
