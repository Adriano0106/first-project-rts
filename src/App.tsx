import React from "react";
import logo from "./logo.svg";
import Button from "@mui/material/Button";
import ProfilePhoto from "./images/fotoAdriano01.jpg";

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

        <div className="profile">
          <div className="profile__info">
            <div className="profile__picture">
              <img
                src={ProfilePhoto}
                className="profile__picture-img"
                alt="Profile-photo"
              />
            </div>
            <div className="profile__text">
              <div className="profile__name">Adriano Andrade da Silva</div>
              <div className="profile__bio">Desenvolvedor Front End</div>
              <div className="profile__skills">
                <div className="item__skills">JavaScript</div>
                <div className="item__skills">TypeScript</div>
                <div className="item__skills">React</div>
                <div className="item__skills">Sass/Scss</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
