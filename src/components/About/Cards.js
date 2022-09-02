/*
import React from 'react';
import style from './About.module.css';
import about from "../../constants/about";

const Cards = () => {
    const elems = about.map((item, index) => {
    return (
        <div>
            key={index}
            <div className={style.aboutCard}>
                <div className={style.deliverCard}>
                    <div className={style.imgBox}>
                        <div className={style.elipse}>
                            <img src={elems.item} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <p className={style.titleDesc}>{elems.item}</p>
            <p className={style.desc}>{elems.item}</p>
        </div>
    )
 })
    return (
        <div className="w3-card w3-margin">
            <div className="w3-container w3-white">
                <p>
                    { about.length > 0 ? elems : 'Карточки отсутствуют' }
                </p>
            </div>
        </div>
    );
};

export default Cards;*/
