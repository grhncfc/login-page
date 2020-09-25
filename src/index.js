import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {DarkThemeProvider} from "./contexts/DarkThemeContext";
import {UserProvider} from "./contexts/UserContext";

ReactDOM.render(
  <React.StrictMode>
      <DarkThemeProvider>
          <UserProvider>
            <App />
          </UserProvider>
      </DarkThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
