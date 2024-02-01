import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Solidity Compiler</h1>
        <p>Test and Run Your Generated Contracts</p>

      </header>
      <div className="editor">
        <iframe src="https://remix.ethereum.org/" width="1000" height="600"></iframe>
      </div>
    </div>
  );
}

export default App;
