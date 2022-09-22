import React from 'react';
import s from './Cards.module.css';

const Cards = () => {
    return (
        <>
            <div className={s.card1}>
                <div className={s.pizza}>
                    <p className={s.mTitle}>Пицца</p>
                    <p className={s.amount}>60</p>
                </div>
                <div className={s.burger}>
                    <p className={s.mTitle2}>Бургер</p>
                    <p className={s.amount2}>16</p>
                </div>
                <div className={s.sushi}>
                    <p className={s.mTitle3}>Суши</p>
                    <p className={s.amount3}>43</p>
                </div>
                <div className={s.roll}>
                    <p className={s.mTitle4}>Роллы</p>
                    <p className={s.amount4}>64</p>
                </div>
            </div>
            <div className={s.card2}>
                <div className={s.salad}>
                    <p className={s.mTitle5}>Салаты</p>
                    <p className={s.amount5}>60</p>
                </div>
                <div className={s.deserts}>
                    <p className={s.mTitle6}>Десерт</p>
                    <p className={s.amount6}>60</p>
                </div>
                <div className={s.drinks}>
                    <p className={s.mTitle7}>Напитки</p>
                    <p className={s.amount7}>43</p>
                </div>
                <div className={s.rolls}>
                    <p className={s.mTitle8}>роллы</p>
                    <p className={s.amount8}>64</p>
                </div>
            </div>
        </>
    );
};

export default Cards;