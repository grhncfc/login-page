import React from 'react';
import {useDarkTheme} from "../contexts/DarkThemeContext";
import styles from "./_container.module.scss";

const Container = ({children}) => {
    const darkTheme = useDarkTheme();
    let containerStyle = darkTheme ? styles.containerDark : styles.container ;
    return (
        <div className={containerStyle}>
            {children}
        </div>
    );
};

export default Container;