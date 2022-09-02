import React from 'react';
import style from './SecondBlok.module.css';
import Summing from "./Summing";

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
            <div className={style.pizza1}>
                <div className={style.img1}>
                </div>
                <div className={style.title1}>
                    <b>Мексиканская</b>
                </div>
                <div className={style.desc1}>
                    <p>Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                </div>
                <div className={style.cost1}>
                    <p>200 сом</p>
                </div>
                <Summing/>
                <div className={style.btn}>
                    <button className={style.button}>В корзину</button>
                </div>
            </div>
            <div className={style.pizza2}>
                <div className={style.img2}>
                </div>
                <div className={style.title2}>
                    <b>Мексиканская</b>
                </div>
                <div className={style.desc2}>
                    <p>Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                </div>
                <div className={style.cost2}>
                    <p>200 сом</p>
                </div>
                <Summing/>
                <div className={style.btn}>
                    <button className={style.button}>В корзину</button>
                </div>
            </div>
            <div className={style.pizza3}>
                <div className={style.img3}>
                </div>
                <div className={style.title3}>
                    <b>Мексиканская</b>
                </div>
                <div className={style.desc3}>
                    <p>Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                </div>
                <div className={style.cost3}>
                    <p>200 сом</p>
                </div>
                <Summing/>
                <div className={style.btn}>
                    <button className={style.button}>В корзину</button>
                </div>
            </div>
            <div className={style.pizza4}>
                <div className={style.img4}>
                </div>
                <div className={style.title4}>
                    <b>Мексиканская</b>
                </div>
                <div className={style.desc4}>
                    <p>Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                </div>
                <div className={style.cost4}>
                    <p>200 сом</p>
                </div>
                <Summing/>
                <div className={style.btn}>
                    <button className={style.button}>В корзину</button>
                </div>
            </div>
            <div className={style.pizza5}>
                <div className={style.img5}>
                </div>
                <div className={style.title5}>
                    <b>Мексиканская</b>
                </div>
                <div className={style.desc5}>
                    <p>Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                </div>
                <div className={style.cost5}>
                    <p>200 сом</p>
                </div>
                <Summing/>
                <div className={style.btn}>
                    <button className={style.button}>В корзину</button>
                </div>
            </div>
            <div className={style.pizza6}>
                <div className={style.img6}>
                </div>
                <div className={style.title6}>
                    <b>Мексиканская</b>
                </div>
                <div className={style.desc6}>
                    <p>Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                </div>
                <div className={style.cost6}>
                    <p>200 сом</p>
                </div>
                <Summing/>
                <div className={style.btn}>
                    <button className={style.button}>В корзину</button>
                </div>
            </div>
            <div className={style.pizza7}>
                <div className={style.img7}>
                </div>
                <div className={style.title7}>
                    <b>Мексиканская</b>
                </div>
                <div className={style.desc7}>
                    <p>Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                </div>
                <div className={style.cost7}>
                    <p>200 сом</p>
                </div>
                <Summing/>
                <div className={style.btn}>
                    <button className={style.button}>В корзину</button>
                </div>
            </div>
            <div className={style.pizza8}>
                <div className={style.img8}>
                </div>
                <div className={style.title8}>
                    <b>Мексиканская</b>
                </div>
                <div className={style.desc8}>
                    <p>Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                </div>
                <div className={style.cost8}>
                    <p>200 сом</p>
                </div>
                <Summing/>
                <div className={style.btn}>
                    <button className={style.button}>В корзину</button>
                </div>
            </div>
            <div className={style.bt}>
                <button className={style.buttn}>Показать еще</button>
            </div>

        </>
    );
};

export default SecondBlok;