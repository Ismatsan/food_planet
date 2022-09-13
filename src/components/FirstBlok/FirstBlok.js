import React from 'react';
import style from './FirstBlok.module.css';
import Cheeseburgers from "./Cheeseburgers/Cheeseburgers";

const FirstBlok = () => {
    return (
        <>
            <div className={style.fBlok}>
                <p className={style.novelties}>Новинки</p>
            </div>
            <div className={style.menu}>
                <a className={style.pizza} href="#" role="button">Пицца</a>
                <a className={style.burger} href="#" role="button">Бургер</a>
                <a className={style.sushi} href="#" role="button">Суши</a>
                <a className={style.rols} href="#" role="button">Роллы</a>
                <a className={style.salads} href="#" role="button">Салаты</a>
                <a className={style.desserts} href="#" role="button">Десерты</a>
                <a className={style.beverages} href="#" role="button">Напитки</a>

            </div>
            <div className={style.chburgers}>
                <Cheeseburgers/>
            </div>
            <div className={style.sBlok}>
                <p className={style.menue}>Меню</p>
            </div>
            <div className={style.menu2}>
                <a className={style.pizza2} href="#" role="button">Пицца</a>
                <a className={style.burger2} href="#" role="button">Бургер</a>
                <a className={style.sushi2} href="#" role="button">Суши</a>
                <a className={style.rols2} href="#" role="button">Роллы</a>
                <a className={style.salads2} href="#" role="button">Салаты</a>
                <a className={style.desserts2} href="#" role="button">Десерты</a>
                <a className={style.beverages2} href="#" role="button">Напитки</a>
            </div>
        </>
    );
};

export default FirstBlok;