import React from 'react';
import style from './Header.module.css';

const Navigator = () => {
    return (
        <div className={style.navigator}>
            <a className={style.main} href="#" role="button">Главная</a>
            <select id="food" className={style.menu}>
                <option value="">Меню</option>
                <option value="Pizzas">Пиццы</option>
                <option value="Cheeseburgers">Чизбургеры</option>
                <option value="Drinks">Напитки</option>
            </select>
            <a className={style.delivery} href="#" role="button">Доставка</a>
            <a className={style.contacts} href="#" role="button">Контакты</a>
        </div>
    );
};

export default Navigator;