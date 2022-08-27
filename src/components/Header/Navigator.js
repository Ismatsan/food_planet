import React from 'react';
import style from './Header.module.css';

const Navigator = () => {
    return (
        <div className={style.navigator}>
            <button className={style.main}>Главная</button>
            <button className={style.menu}>Меню</button>
            <button className={style.delivery}>Доставка</button>
            <button className={style.contacts}>Контакты</button>
        </div>
    );
};

export default Navigator;