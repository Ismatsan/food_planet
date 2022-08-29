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
            <div className={style.sBlok}>
                <p className={style.menue}>Меню</p>
            </div>
            <div className={style.menu2}>
                <a href="./" target="_blank">
                    <button className={style.pizza2}>Пицца</button>
                </a>
                <a href="./" target="_blank">
                    <button className={style.burger2}>Бургер</button>
                </a>
                <a href="./" target="_blank">
                    <button className={style.sushi2}>Суши</button>
                </a>
                <a href="./" target="_blank">
                    <button className={style.rols2}>Роллы</button>
                </a>
                <a href="./" target="_blank">
                    <button className={style.salads2}>Салаты</button>
                </a>
                <a href="./" target="_blank">
                    <button className={style.desserts2}>Десерты</button>
                </a>
                <a href="./" target="_blank">
                    <button className={style.salads2}>Напитки</button>
                </a>
            </div>
        </>
    );
};

export default FirstBlok;