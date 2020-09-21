import React from 'react';
import loginImgVisible from '../../assets/pw-visible.svg';
import loginImgNonVisible from '../../assets/pwnon-visible.svg';
import loginImgVisibleDark from '../../assets/pw-visibleDark.svg';
import loginImgNonVisibleDark from '../../assets/pwnon-visibleDark.svg';
import styles from "./_visibilityImg.module.scss";
import {useDarkTheme} from "../contexts/DarkThemeContext";

const VisibilityImg = ({visibility,onClick}) => {
    const darkTheme = useDarkTheme();
    let loginImgDark = visibility ? loginImgVisibleDark : loginImgNonVisibleDark ;
    let loginImg = visibility ? loginImgVisible : loginImgNonVisible ;
    let finalImg = darkTheme ? loginImgDark : loginImg;

    return (
        <img className={styles.imgStyle} onClick={onClick} src={finalImg}/>
    );
};

export default VisibilityImg;