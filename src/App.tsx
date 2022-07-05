import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>by: Adriano Andrade</p>
      </header>
    </div>
  );
}

export default App;
