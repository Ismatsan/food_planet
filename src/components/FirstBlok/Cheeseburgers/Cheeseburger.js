import React from 'react';
import style from './Cheeseburger.module.css';
import Adder from "./adder/Adder";
import img from './img/Tofu-Burger- 1.png';
import img2 from './img/Tofu-Burger- 2.png';
import img3 from './img/Tofu-Burger-3.png';
import img4 from './img/Tofu-Burger-4.png';

const Cheeseburger = (props) => {
    return (
        <>
            <img className={style.cheeseburg} src={img} alt=""/>
            <div className={style.title}>
                <b>{props.titleDesc}</b>
            </div>
            <div className={style.desc}>
                <p>{props.desc}</p>
            </div>
            <div className={style.cost}>
                <p>{props.price}</p>
            </div>
            <Adder/>
            <div className={style.btn}>
                <button className={style.button}>В корзину</button>
            </div>
            <div className={style.cheeseburgers1}>
                <img className={style.cheeseburg1} src={img2} alt=""/>
                <div className={style.title1}>
                    <b>{props.titleDesc}</b>
                </div>
                <div className={style.desc1}>
                    <p>{props.desc}</p>
                </div>
                <div className={style.cost1}>
                    <p>{props.price}</p>
                </div>
                <Adder/>
                <div className={style.btn}>
                    <button className={style.button}>В корзину</button>
                </div>
            </div>
            <div className={style.cheeseburgers2}>
                <img className={style.cheeseburg2} src={img3} alt=""/>
                <div className={style.title2}>
                    <b>{props.titleDesc}</b>
                </div>
                <div className={style.desc2}>
                    <p>{props.desc}</p>
                </div>
                <div className={style.cost2}>
                    <p>{props.price}</p>
                </div>
                <Adder/>
                <div className={style.btn}>
                    <button className={style.button}>В корзину</button>
                </div>
            </div>
            <div className={style.cheeseburgers3}>
                <img className={style.cheeseburg3} src={img4} alt=""/>
                <div className={style.title3}>
                    <b>{props.titleDesc}</b>
                </div>
                <div className={style.desc3}>
                    <p>{props.desc}</p>
                </div>
                <div className={style.cost3}>
                    <p>{props.price}</p>
                </div>
                <Adder/>
                <div className={style.btn}>
                    <button className={style.button}>В корзину</button>
                </div>
            </div>
        </>
    );
};

export default Cheeseburger;