import React from 'react';
import style from './Footer.module.css';
import img from './Logo/phone 1.png';

const Footer = () => {
    return (
        <>
            <div className={style.footer}>
                <div className={style.menue}>
                    <div className={style.logo}> </div>
                    <div className={style.list}>
                        <a className={style.mane} href="#" role="button">Главная</a>
                        <select id="food" className={style.footerMenu}>
                            <option value="">Меню</option>
                            <option value="Pizzas">Пиццы</option>
                            <option value="Cheeseburgers">Чизбургеры</option>
                            <option value="Drinks">Напитки</option>
                        </select>
                        <a className={style.delivery} href="#" role="button">Доставка</a>
                        <a className={style.contacts} href="#" role="button">Контакты</a>
                    </div>
                    <div className={style.tel}>
                        <img className={style.img} src={img} alt=""/>
                        <input type="tel" name="phoneNumber" className={style.phoneNumber} placeholder="996500405988"/>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Footer;