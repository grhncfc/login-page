import React from 'react';
import styles from "./_form.module.scss";
import {useUser} from "../../contexts/UserContext";


//make form great again

const Form = (props) => {

    const onSubmit = (e) => {
        e.preventDefault();
        if(props.onSubmit){
            props.onSubmit(e,props.user);
        }
    };

    return (
        <form onSubmit={onSubmit} className={`${styles.default} ${props.className}`}>
            {props.children}
        </form>
    );
};

export default Form;
