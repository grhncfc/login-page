//react
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
// styles
import {useDarkTheme,useDarkThemeToggle} from "./contexts/DarkThemeContext";
import styles from "./_app.module.scss";
// components
import Container from "./components/Container/Container";
import Login from "./components/Login/Login";
import Switch from "./components/Switch/Switch";
import NavBar from "./components/NavBar/NavBar";
//utils
import {useUser} from "./contexts/UserContext";

//TODO change dark mode animations


function App() {
    const darkTheme = useDarkTheme();
    const setDarkTheme = useDarkThemeToggle();
    const [authentication,setAuthentication] = useState(false);
    const user = useUser();

    const onSwitchChange = (isChecked) => {
        setDarkTheme(darkTheme => !darkTheme);
    };

    const dependency = ["1", "2"];

    const oldDependency = ["1", "2"];


    console.log(dependency === oldDependency);

    useEffect(() => {
        setDarkTheme(darkTheme => !darkTheme);
    }, [dependency]);

    const logOut = () => {
        //reset localStorage
        //navigate to /login
        setAuthentication(false);
    };

    return (
            <Router>
                <Container darkTheme={darkTheme}>
                    {authentication ? <Redirect to="/homepage" /> : <Redirect to="/login" />}
                    <Switch onChange={onSwitchChange}/>
                    <Route exact path="/login">
                        <div className={`${styles.innerContainer} ${darkTheme ? styles.dark : styles.light}`}>
                            <Login setAuthentication={setAuthentication}/>
                        </div>
                    </Route>
                    <Route exact path="/homepage">
                        <NavBar user={user} onClick={logOut}/>
                    </Route>
                </Container>
            </Router>

  );
}

export default App;
