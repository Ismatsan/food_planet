import React from 'react';
import style from './Header.module.css';

const Navigator = () => {
    return (
        <div className={style.navigator}>
            <button className={style.main}>Главная</button>
            <select id="food" className={style.menu}>
                <option value="">Меню</option>
                <option value="Pizzas">Пиццы</option>
                <option value="Cheeseburgers">Чизбургеры</option>
                <option value="Drinks">Напитки</option>
            </select>
            <button className={style.delivery}>Доставка</button>
            <button className={style.contacts}>Контакты</button>
        </div>
    );
};

export default Navigator;