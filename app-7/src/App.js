import React, { useState } from "react";
import List from "./Components/List";
import NewTask from "./Components/NewTask";

function App() {
  const [list, setList] = useState([]);
  return (
    <div>
      <NewTask list={list} setList={setList} />
      <List list={list} />
    </div>
  );
}

export default App;
