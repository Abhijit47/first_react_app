import "./App.css";
import "./style.css";
// import { useState } from "react";

function App() {
  const appName = "1st React App";
  return (
    <div className="App">
      <div class="heading">
        <h1>1st Assignment😍</h1>
        <h2>{appName}</h2>
      </div>
      <div class="heading2">
        <h2>Word Counter</h2>
      </div>
      <div class="box">
        <input type="text" id= "input" placeholder="Enter your text here" />
        <button className="btn">
          Calculate
        </button>
        <span>Count - </span>
        <span>0</span>
      </div>
    </div>
  );
}

export default App;
