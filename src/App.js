//react
import React, {useState, useRef} from 'react';
// styles
import styles from "./_app.module.scss";
// components
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import {DarkThemeProvider} from "./components/contexts/DarkThemeContext";
import {UserProvider} from "./components/contexts/UserContext"
//assets
import Switch from "./components/Switch/Switch";
import Container from "./components/Container/Container";
import VisibilityImg from "./components/VisibilityImg/VisibilityImg";


function App() {
    const [visibility,setVisibility] = useState(false);
    const [disabledState,setDisabledState] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef({id : '', password : ''});
    const onClick = () => {
        setVisibility(!visibility);
    };
    const onSubmit = (e,user) => {
        let id = e.target.id.value;
        let password = e.target.password.value;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if (password === user.userData.filter(user => user.id === id)[0].password){
                console.log("Giriş Başarılı");
            }else {
                console.log("Giriş Başarısız");
            }
        }, 1000);
    }
    const onChange = (e) =>{
       inputRef.current[e.target.name] = e.target.value;
       if (inputRef.current.id && inputRef.current.password){
           setDisabledState(false);
       }else {
           setDisabledState(true);
       }
    }
    const onSwitchChange = (node,isChecked,darkTheme,setDarkTheme) => {
        setDarkTheme(darkTheme => !darkTheme);
    }
    return (
      <DarkThemeProvider>
          <UserProvider>
            <Container >
                <Switch onChange={onSwitchChange}/>
                <div className={styles.innerContainer}>
                    <Form onSubmit={onSubmit}>
                        <Input onChange={onChange} name={"id"} placeholder={"Kullanıcı Adı"}/>
                        <div className={styles.inputStyle}>
                            <Input onChange={onChange} name={"password"} placeholder={"Şifre"} type={visibility ? "text" : "password"}/>
                            <VisibilityImg visibility={visibility} onClick={onClick}/>
                        </div>
                        <Button loading={loading} disabled={disabledState}>Giriş yap</Button>
                    </Form>
                </div>
            </Container>
          </UserProvider>
      </DarkThemeProvider>
  );
}

export default App;
