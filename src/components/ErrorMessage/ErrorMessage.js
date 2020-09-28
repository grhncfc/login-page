import React from 'react';
import styles from "./_errormessage.module.scss";
const ErrorMessage = () => {
    return (
        <div className={styles.defaultError}>
            Kullanıcı adı veya şifre hatalı
        </div>
    );
};

export default ErrorMessage;