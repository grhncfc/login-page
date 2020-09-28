//react
import React, {useState, useRef} from 'react';
import { BrowserRouter as Router, Route , Link , Redirect} from 'react-router-dom';
// styles
import {useDarkTheme,useDarkThemeToggle} from "./contexts/DarkThemeContext";
import styles from "./_app.module.scss";
// components
import NavBar from "./components/NavBar/NavBar";
//assets
import Switch from "./components/Switch/Switch";
import Container from "./components/Container/Container";
//utils
import Login from "./components/Login/Login";
import {useUser} from "./contexts/UserContext";

function App() {
    const darkTheme = useDarkTheme();
    const setDarkTheme = useDarkThemeToggle();
    const [authentication,setAuthentication] = useState(false);
    const user = useUser();

    const onSwitchChange = () => {
        setDarkTheme(darkTheme => !darkTheme);
    };

    const logOut = () => {
        setAuthentication(false);
    };

    return (
        <Container darkTheme={darkTheme}>
            <Router>
                <Route exact path="/"></Route>
                {authentication ? <Redirect to="/homepage" /> : <Redirect to="/login" />}
                <Switch onChange={onSwitchChange}/>
                <Route exact path="/login">
                    <div className={darkTheme ? styles.innerContainerDark :styles.innerContainer }>
                        <Login setAuthentication={setAuthentication}/>
                    </div>
                </Route>
                <Route exact path="/homepage">
                    <NavBar user={user} onClick={logOut}/>
                </Route>
            </Router>
        </Container>
  );
}

export default App;
