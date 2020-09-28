import React from 'react';
import loginImgVisible from '../../assets/pw-visible.svg';
import loginImgNonVisible from '../../assets/pwnon-visible.svg';
import loginImgVisibleDark from '../../assets/pw-visibleDark.svg';
import loginImgNonVisibleDark from '../../assets/pwnon-visibleDark.svg';
import styles from "./_visibilityImg.module.scss";

//make visibilityImg great again

const VisibilityImg = ({visibility, onClick , darkMode}) => {

    const visibilityImg = darkMode ? (visibility ? loginImgVisibleDark : loginImgNonVisibleDark) : (visibility ? loginImgVisible : loginImgNonVisible ) ;

    return (
        <img className={styles.imgStyle} onClick={onClick} src={visibilityImg}/>
    );
};

export default VisibilityImg;
