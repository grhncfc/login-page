//react
import React, {useState, useRef} from 'react';
import { BrowserRouter as Router, Route , Link , Redirect} from 'react-router-dom';
//hooks
import useVisibility from "./utils/customHooks/useVisibility";
// styles
import {useDarkTheme,useDarkThemeToggle} from "./contexts/DarkThemeContext";
import {useUser} from "./contexts/UserContext";
import styles from "./_app.module.scss";
// components
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
//assets
import Switch from "./components/Switch/Switch";
import Container from "./components/Container/Container";
import VisibilityImg from "./components/VisibilityImg/VisibilityImg";
//utils
import {authenticate} from "./gurhan";


//Create a login component

function App() {
    const darkTheme = useDarkTheme();
    const setDarkTheme = useDarkThemeToggle();
    const user = useUser();

    const [visibility, toggleVisibility] = useVisibility(false);

    const [disabledState,setDisabledState] = useState(true);
    const [loading, setLoading] = useState(false);
    // const [userName,setUserName] = useState("");
    const [authentication, setAuthentication] = useState(false);
    const inputRef = useRef({id : '', password : ''});

    const onSubmit = (e) => {
        //get required data
        //set loading
        //handle authentication
        //handle state updates
        let id = e.target.id.value;
        let password = e.target.password.value;
        setLoading(true);
        authenticate(1000, id, password).then((response) => {
            //login succeed, handle state update
            setAuthentication(true);
            // setUserName(response.user);
        }).catch((y)=> {
            //set error state
        }).finally(() => setLoading(false));
    };

    const onChange = (e) => {
       inputRef.current[e.target.name] = e.target.value;
       if (inputRef.current.id && inputRef.current.password){
           setDisabledState(false);
       }else {
           setDisabledState(true);
       }
    };

    const onSwitchChange = (node, isChecked) => {
        setDarkTheme(darkTheme => !darkTheme);
    };

    const logOut = () => {
        setAuthentication(false);
    };

    return (
        <Container darkTheme={darkTheme}>
            <Router>
                {authentication ? <Redirect to="/homepage" /> : <Redirect to="/login" />}
                <Route exact path="/login">
                    <Switch onChange={onSwitchChange}/>
                    <div className={darkTheme ? styles.innerContainerDark :styles.innerContainer }>
                        <div className={darkTheme ? styles.titleDark : styles.title}>
                            Mağaza Girişi
                        </div>
                        <Form user={user} onSubmit={onSubmit}>
                            <Input onChange={onChange} name={"id"} placeholder={"Kullanıcı Adı"}/>
                            <div className={styles.inputStyle}>
                                <Input onChange={onChange} name={"password"} placeholder={"Şifre"} type={visibility ? "text" : "password"}/>
                                <VisibilityImg visibility={visibility} onClick={toggleVisibility}/>
                            </div>
                            <Button loading={loading} disabled={disabledState}>Giriş yap</Button>
                        </Form>
                    </div>
                </Route>
                <Route exact path="/homepage">
                    <NavBar onClick={logOut}/>
                </Route>
            </Router>
        </Container>
  );
}

export default App;
