import React from 'react';
import style from './Header.module.css';

const Basket = () => {
    return (
        <div className={style.basket}>
            <button className={style.buy}> </button>
            <input type="number" className={style.amount} name="amount" placeholder={1}/>
        </div>
    );
};

export default Basket;