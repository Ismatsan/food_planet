import React from 'react';
import Logo from "./Logo";
import style from './Header.module.css';
import Navigator from "./Navigator";
import Phone from "./Phone";
import Basket from "./Basket";

const group = [
    {
        img: "./img/LOgo.svg"
    }
]
const Header = () => {
    return (
            <header>
                <div className={style.header}>
                    <Logo
                        img ={group[0].img}
                    />
                    <Navigator/>
                    <Phone/>
                    <Basket/>
                </div>

            </header>
    );
};

export default Header;