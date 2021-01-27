import React, { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <input
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <input
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          alert(`User: ${user} Password: ${pass}`);
        }}
      >
        login
      </button>
    </div>
  );
}

export default App;
