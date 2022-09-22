import React from 'react';
import style from './Header.module.css';

const Basket = () => {
    return (
        <div className={style.basket}>
            <a className={style.buy} href="/checkout" role="btn">Li.</a>
            <input type="number" className={style.amount} name="amount" placeholder={1}/>
        </div>
    );
};

export default Basket;