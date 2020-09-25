import React,{useState} from 'react';
import styles from "./_input.module.scss";

const Input = ({darkTheme,placeholder,type,children,...restProps}) => {
    //TODO remove state only control with CSS.
    let defaultStyle = darkTheme ? styles.defaultDark : styles.default;

    const onChange = (e) => {
        if (restProps.onChange){
            restProps.onChange(e);
        }
    };

    return (
            <input placeholder={placeholder} type={type} {...restProps} onChange={onChange} className={`${defaultStyle} ${restProps.className}`}/>
    );
};

export default Input;
