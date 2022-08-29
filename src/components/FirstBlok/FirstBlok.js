import React from 'react';
import style from './FirstBlok.module.css';
import Cheeseburger from "./Cheeseburgers/Cheeseburger";

const FirstBlok = () => {
    return (
        <>
            <div className={style.fBlok}>
                <p className={style.novelties}>Новинки</p>
            </div>
            <div className={style.menu}>
                <a href="./" target="_blank">
                    <button className={style.pizza}>Пицца</button>
                </a>
                <a href="./" target="_blank">
                    <button className={style.burger}>Бургер</button>
                </a>
                <a href="./" target="_blank">
                    <button className={style.sushi}>Суши</button>
                </a>
                <a href="./" target="_blank">
                    <button className={style.rols}>Роллы</button>
                </a>
                <a href="./" target="_blank">
                    <button className={style.salads}>Салаты</button>
                </a>
                <a href="./" target="_blank">
                    <button className={style.desserts}>Десерты</button>
                </a>
                <a href="./" target="_blank">
                    <button className={style.salads}>Напитки</button>
                </a>
            </div>
            <div className={style.chburgers}>
                <Cheeseburger/>
            </div>
        </>
    );
};

export default FirstBlok;