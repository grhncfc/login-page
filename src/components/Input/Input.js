import React,{useState} from 'react';
import styles from "./_input.module.scss";

const Input = ({darkTheme,placeholder,type,children,...restProps}) => {
    //TODO remove state only control with CSS.>

    const onChange = (e) => {
        if (restProps.onChange){
            restProps.onChange(e);
        }
    };

    return (
            <input placeholder={placeholder} type={type} {...restProps} onChange={onChange} className={`${styles.default} ${restProps.className}`}/>
    );
};

export default Input;
