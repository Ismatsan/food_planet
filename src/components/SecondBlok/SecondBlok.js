import React from 'react';
import style from './SecondBlok.module.css';

const SecondBlok = () => {
    return (
        <>
            <div className={style.sorter}>
                <p className={style.sort}>Сортировать по: </p>
                <ul className={style.rectangle}>
                    <select id="food" className={style.select}>
                        <option value="">По умолчанию</option>
                        <option value="Pizzas">Пиццы</option>
                        <option value="Cheeseburgers">Чизбургеры</option>
                        <option value="Drinks">Напитки</option>
                    </select>
                </ul>
            </div>
        </>
    );
};

export default SecondBlok;