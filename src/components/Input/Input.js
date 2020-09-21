import React,{useState} from 'react';
import {useDarkTheme} from "../contexts/DarkThemeContext";

import styles from "./_input.module.scss";

const Input = ({placeholder,type,children,...restProps}) => {
    const darkTheme = useDarkTheme();
    const [textStyle,setTextStyle] = useState();
    let defaultStyle = darkTheme ? styles.defaultDark : styles.default;
    const onChange = (e) => {
        if (e.target.value){
            setTextStyle(styles.wText);
        }else{
            setTextStyle('');
        }
        if (restProps.onChange){
            restProps.onChange(e);
        }
    };
    return (
            <input  placeholder={placeholder} type={type} {...restProps} onChange={onChange} className={`${defaultStyle} ${textStyle}`}/>
    );
};

export default Input;