import React from 'react';
import style from './Header.module.css'

const Logo = (props) => {
    return (
        <div className={style.Logo}>
            <img src={props.img} alt="LOGO" style={{width: "100%"}}/>
        </div>
    );
};

export default Logo;