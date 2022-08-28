import React from 'react';
import style from './Delivery.module.css';

const Delivery = () => {
    return (
        <div className={style.delivery}>
            <p className={style.title}>Доставка вкусной еды до 30 минут + напиток в подарок!</p>
            <p className={style.text}>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и ароматным.</p>
            <div className={style.button}>
                <button className={style.btn}>Перейти в меню</button>
                <img src="" className={style.frame} alt=""/>
            </div>
        </div>

    );
};

export default Delivery;