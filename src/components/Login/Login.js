import React, {useRef, useState} from 'react';
import styles from "./_login.module.scss";
import Form from "../Form/Form";
import Input from "../Input/Input";
import VisibilityImg from "../VisibilityImg/VisibilityImg";
import Button from "../Button/Button";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {useDarkTheme} from "../../contexts/DarkThemeContext";
import useVisibility from "../../utils/customHooks/useVisibility";
import {authenticate} from "../../gurhan";
import {useSetUser} from "../../contexts/UserContext";

const Login = (props) => {

    const darkTheme = useDarkTheme();
    const inputRef = useRef({id: '', password: ''});
    const [visibility, toggleVisibility] = useVisibility(false);
    const [disabledState,setDisabledState] = useState(true);
    const [loading, setLoading] = useState(false);
    const [showError, setShowError] = useState(false);
    const setUser = useSetUser();

    const onSubmit = (e) => {
        let id = e.target.id.value;
        let password = e.target.password.value;
        setLoading(true);
        authenticate(1000, id, password).then((response) => {
            setUser(response.user);
            props.setAuthentication(true);
        }).catch(()=> {
            setShowError(true);
        }).finally(() => setLoading(false));
    };

    const onChange = (e) => {
        inputRef.current[e.target.name] = e.target.value;
        if (inputRef.current.id && inputRef.current.password) {
            setDisabledState(false);
        } else {
            setDisabledState(true);
        }
    };

        return (
            <div>
                <div className={darkTheme ? styles.titleDark : styles.title}>
                    Mağaza Girişi
                </div>
                <Form onSubmit={onSubmit}>
                    <Input className={darkTheme ? styles.defaultInputDark : ''} onChange={onChange} name={"id"}
                           placeholder={"Kullanıcı Adı"}/>
                    <div className={styles.inputStyle}>
                        <Input className={darkTheme ? styles.defaultInputDark : ''} onChange={onChange}
                               name={"password"} placeholder={"Şifre"} type={visibility ? "text" : "password"}/>
                        <VisibilityImg darkMode={darkTheme} visibility={visibility} onClick={toggleVisibility}/>
                    </div>
                    <Button loading={loading} disabled={disabledState}>Giriş yap</Button>
                    {showError && <ErrorMessage/>}
                </Form>
            </div>
        );
};

export default Login;
