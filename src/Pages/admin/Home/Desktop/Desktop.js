import React from 'react';
import s from './Desktop.module.css';
import img from './Logo/Logo.png';
import img2 from './Logo/1. overview.png';
import icon2 from './Logo/2. tickets.png';
import icon3 from './Logo/3. ideas.png';
import icon4 from './Logo/4. contacts.png';
import icon5 from './Logo/5. agents.png';
import icon6 from './Logo/6. articles.png';

const Desktop = () => {
    return (
        <div className={s.sidebar}>
            <img className={s.logo} src={img} alt=""/>
            <p className={s.mainTitle}>FOOD PLANET</p>
            <a className={s.mainSidebar} href="/" role="button">Главная</a>
            <img className={s.icon} src={img2} alt=""/>
            <a className={s.orders} href="/" role="button">Заказы</a>
            <img className={s.icon2} src={icon2} alt=""/>
            <a className={s.menu} href="/" role="button">Меню</a>
            <img className={s.icon3} src={icon3} alt=""/>
            <a className={s.contacts} href="/" role="button">Контакты</a>
            <img className={s.icon4} src={icon4} alt=""/>
            <a className={s.reviews} href="/" role="button">Отзывы</a>
            <img className={s.icon5} src={icon5} alt=""/>
            <a className={s.employees} href="/" role="button">Сотрудники</a>
            <img className={s.icon6} src={icon6} alt=""/>

        </div>
    );
};

export default Desktop;