import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {DarkThemeProvider} from "./contexts/DarkThemeContext";
import {UserProvider} from "./contexts/UserContext";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
      <DarkThemeProvider>
          <UserProvider>
            <Berk />
          </UserProvider>
      </DarkThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
