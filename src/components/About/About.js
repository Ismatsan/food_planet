import React from 'react';
import style from './About.module.css';
import img from './icon/delivery.png';
import img2 from './icon/freshFoods.png';
import img3 from './icon/unicMenu.png';
import img4 from './icon/geoposition.png';

const About = () => {
    return (
        <>
            <div className={style.about}>
                <h1 className={style.title}>Почему выбирают нас:</h1>
                <div className={style.arguments}>
                    <div className={style.argument}>
                        <img className={style.img} src={img} alt=" "/>
                        <h2 className={style.titleDesc}>Мгновенная доставка</h2>
                        <p className={style.desc}>Доставим заказанную вами еду за 30 минут + напиток в подарок</p>
                    </div>
                    <div className={style.argument2}>
                        <img className={style.img2} src={img2} alt=""/>
                        <h2 className={style.titleDesc2}>Свежие продукты</h2>
                        <p className={style.desc2}>Вся продукция хранится в хороших условиях тем самым продливая срок хранения</p>
                    </div>
                    <div className={style.argument3}>
                        <img className={style.img3} src={img3} alt=""/>
                        <h2 className={style.titleDesc3}>Уникальное меню</h2>
                        <p className={style.desc3}>Ежедневно мы обновляем наше меню и том числе коктейльное</p>
                    </div>
                    <div className={style.argument4}>
                        <img className={style.img4} src={img4} alt=""/>
                        <h2 className={style.titleDesc4}>Доставка</h2>
                        <p className={style.desc4}>Мы быстро доставляем вашу еду по указанному адресу</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
