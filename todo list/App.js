import React, { useState, useEffect } from "react";
import "./App.css";
import Input from "./Components/Input";
import List from "./Components/List";

function App() {
  const [value, setValue] = useState("");
  const [arr, setArr] = useState(() => {
    const localTodos = localStorage.getItem("todos");
    return localTodos ? JSON.parse(localTodos) : [];
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(arr));
  }, [arr]);
  return (
    <div className="wrapper">
      <Input value={value} setValue={setValue} arr={arr} setArr={setArr} />
      <List arr={arr} setArr={setArr} />
    </div>
  );
}

export default App;
