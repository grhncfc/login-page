import React from 'react';
import styles from "./_button.module.scss";
import ReactLoading from 'react-loading';

const Button = (props) => {
    return (
        <button disabled={props.disabled} type={"submit"} className={`${styles.default} ${props.className}`}>
            {
                props.loading ?
                <ReactLoading className={styles.loading} type={"spinningBubbles"} width={"10%"} height={"20%"}
                              color={"white"}/> : props.children
            }
        </button>
    );
};

export default Button;
