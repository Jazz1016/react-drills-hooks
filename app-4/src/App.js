import React, { useState } from "react";

function App() {
  const [input, setInput] = useState(""),
    [password, setPassword] = useState("");
  return (
    <div>
      <input
        onChange={e => {
          setInput(e.target.value);
        }}
        name="username"
      />
      <input
        onChange={e => {
          setPassword(e.target.value);
        }}
        name="password"
      />
      <button
        onClick={() => {
          alert(`username: ${input} password: ${password}`);
        }}
      >
        Login
      </button>
    </div>
  );
}

export default App;
