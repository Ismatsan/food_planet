import React from 'react';
import s from './Head.module.css';
import search from './img/search.png';
import notification from './img/notification.png';
import divider from './img/divider.png';
import foto from './img/photo.png';

const Head = () =>{
    return (
        <>
            <div className={s.head}>
                <p className={s.title}>Главная</p>
                <img className={s.img} src={search} alt=""/>
                <img className={s.img2} src={notification} alt=""/>
                <img className={s.img3} src={divider} alt=""/>
                <p className={s.name}>Jones Ferdinand</p>
                <img className={s.img4} src={foto} alt=""/>
            </div>
        </>
    );
};

export default Head;