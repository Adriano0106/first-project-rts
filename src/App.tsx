import React from "react";
import logo from "./logo.svg";
import Button from "@mui/material/Button";

import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <Button
            variant="contained"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </Button>
        </p>
        <p>by: Adriano Andrade</p>
      </header>
    </div>
  );
}

export default App;
