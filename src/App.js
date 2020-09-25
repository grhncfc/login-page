//react
import React, {useState, useRef} from 'react';
import { BrowserRouter as Router, Route , Link , Redirect} from 'react-router-dom';
// stylesü
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

//context yerleri degisecek
//app js context icine al

function App() {
    const [visibility,setVisibility] = useState(false);
    const [disabledState,setDisabledState] = useState(true);
    const [loading, setLoading] = useState(false);
    const [userName,setUserName] = useState("");
    const [authentication,setAuthentication] = useState(false);
    const inputRef = useRef({id : '', password : ''});
    const darkTheme = useDarkTheme();
    const setDarkTheme = useDarkThemeToggle();
    const user = useUser();
    const onClick = () => {
        setVisibility(!visibility);
    };

    const onSubmit = (e,user) => {
        let id = e.target.id.value;
        let password = e.target.password.value;
        setLoading(true);
        const promiseFunc = (delayTime) => {
            const promise = new Promise((resolve, reject) =>{
                setTimeout(() => {
                    setLoading(false);
                    const targetId = user.userData.find(user => user.id === id);
                    if (targetId){
                        if (password === targetId.password){
                            resolve('Success')
                            setAuthentication(true);
                            setUserName(targetId.id);
                        }else {
                            reject('Failed');
                        }
                    }else {
                        reject('Failed');
                    }
                }, delayTime);
            });
            promise.then((x) => console.log(x)).catch((y)=>console.log(y));
        }
        promiseFunc(1000);
    }
    const onChange = (e) => {
       inputRef.current[e.target.name] = e.target.value;
       if (inputRef.current.id && inputRef.current.password){
           setDisabledState(false);
       }else {
           setDisabledState(true);
       }
    }
    const onSwitchChange = (node,isChecked,darkTheme,setDarkTheme) => {
        setDarkTheme(darkTheme => !darkTheme);
    };
    const LogOut = () => {
        setAuthentication(false);
    }
    return (
        <Container darkTheme={darkTheme}>
            <Router>
                {authentication ? <Redirect to="/homepage" /> : <Redirect to="/" />}
                <Route exact path="/">
                    <Switch darkTheme={darkTheme} setDarkTheme={setDarkTheme} onChange={onSwitchChange}/>
                    <div className={darkTheme ? styles.innerContainerDark :styles.innerContainer }>
                        <div className={darkTheme ? styles.titleDark : styles.title}>
                            Mağaza Girişi
                        </div>
                        <Form user={user} onSubmit={onSubmit}>
                            <Input darkTheme={darkTheme} onChange={onChange} name={"id"} placeholder={"Kullanıcı Adı"}/>
                            <div className={styles.inputStyle}>
                                <Input darkTheme={darkTheme} onChange={onChange} name={"password"} placeholder={"Şifre"} type={visibility ? "text" : "password"}/>
                                <VisibilityImg visibility={visibility} onClick={onClick}/>
                            </div>
                            <Button loading={loading} disabled={disabledState}>Giriş yap</Button>
                        </Form>
                    </div>
                </Route>
                <Route path="/homepage" exact >
                    <NavBar onClick={LogOut} user={userName}/>
                </Route>
            </Router>
        </Container>
  );
}

export default App;
