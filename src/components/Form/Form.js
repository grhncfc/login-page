import React from 'react';
import styles from "./_form.module.scss";
import {useUser} from "../../contexts/UserContext";

const Form = (props) => {
    const user = useUser();

    const onSubmit = (e) => {
        e.preventDefault();
        if(props.onSubmit){
            props.onSubmit(e,user);
        }
    };

    return (
        <form onSubmit={onSubmit} className={styles.default}>
            {props.children}
        </form>
    );
};

export default Form;
