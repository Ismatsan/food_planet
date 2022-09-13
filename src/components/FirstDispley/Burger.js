import React from 'react';
import style from './Burger.module.css';
import img from './img/burger.jpg';


const Burger = () => {
    return (
        <img className={style.burger} src={img} alt=""/>
    );
};

export default Burger;