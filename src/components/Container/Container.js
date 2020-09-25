import React from 'react';
import styles from "./_container.module.scss";

const Container = ({children,darkTheme}) => {
    const containerStyle = darkTheme ? styles.containerDark : styles.container ;
    return (
        <div className={containerStyle}>
            {children}
        </div>
    );
};

export default Container;
