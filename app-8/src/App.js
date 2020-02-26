import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [person, setPerson] = useState("");
  useEffect(() => {
    axios.get("https://swapi.co/api/people/4").then(res => {
      setPerson(res.data);
    });
  }, []);
  console.log(person);
  return (
    <div className="App">
      name: <h4>{person.name}</h4>
      gender: <h4>{person.gender}</h4>
      height: <h4>{person.height}</h4>
      birth year: <h4>{person.birth_year}</h4>
    </div>
  );
}

export default App;
