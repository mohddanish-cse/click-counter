import React, { useState } from "react";
import './App.css';
var newCount = 0;

export default function App() {
  const [count, setLikeCounter] = useState(0);
  function clickFn() {
    newCount = count + 1;
    setLikeCounter(newCount);
  }
  return (
    <div className="App">
      <button onClick={clickFn}>Click here!</button>
      {newCount}
    </div>
  );
}
