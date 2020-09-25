import React from 'react';
import styles from './_navbar.module.scss';

const NavBar = (props) => {
    const logOutHandler = () => {
        if (props.onClick){
            props.onClick();
        }
    }
    return (
        <div className={`${styles.container} ${props.className}`}>
            Hoşgeldin {props.user}
            <button onClick={logOutHandler}>Çıkış Yap</button>
        </div>
    );
};

export default NavBar;