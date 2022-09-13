import React from 'react';
import style from './SecondBlok.module.css';
import Summing from "./Summing";
import img from './img/Tofu-Burger-PNG-1.png';
import img2 from './img/Tofu-Burger-PNG- 2.png';
import img3 from './img/Tofu-Burger-PNG-3.png';
import img4 from './img/Tofu-Burger-PNG-4.png';
import img5 from './img/Tofu-Burger-PNG-5.png';
import img6 from './img/Tofu-Burger-PNG-6.png';
import img7 from './img/Tofu-Burger-PNG-7.png';
import img8 from './img/Tofu-Burger-PNG-8.png';

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
                <img className={style.img1} src={img} alt=""/>
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
                <img className={style.img2} src={img2} alt=""/>
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
                <img className={style.img3} src={img3} alt=""/>
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
                <img className={style.img4} src={img4} alt=""/>
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
                <img className={style.img5} src={img5} alt=""/>
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
                <img className={style.img6} src={img6} alt=""/>
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
                <img className={style.img7} src={img7} alt=""/>
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
                <img className={style.img8} src={img8} alt=""/>
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