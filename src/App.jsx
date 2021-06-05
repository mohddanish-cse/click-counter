import React, { useState } from "react";
import './App.css';
var newCount = 0;

export default function App() {
  const [count, setLikeCounter] = useState(0);
  function clickFn() {
    newCount = count + 1;
    setLikeCounter(newCount);
  }
  function resetFn(){
    newCount = 0;
    setLikeCounter(newCount);
  }
  return (
    <div className="App">
      <button style={{backgroundColor:"#008CBA",color:"white",borderRadius:"8px",fontSize:"20px"}} onClick={clickFn}>Click here!</button> {newCount}
      <br/>
      <br/>
      <button style={{backgroundColor:"#f44336",color:"white",fontSize:"20px"}} onClick={resetFn}>Reset</button>
    </div>
  );
}
