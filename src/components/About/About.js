import React from 'react';
import style from './About.module.css';

const About = () => {
    return (
        <>
            <div className={style.about}>
                <h1 className={style.title}>Почему выбирают нас:</h1>
                <div className={style.arguments}>
                    <div className={style.argument}>
                        <div className={style.img}> </div>
                        <h2 className={style.titleDesc}>Мгновенная доставка</h2>
                        <p className={style.desc}>Доставим заказанную вами еду за 30 минут + напиток в подарок</p>
                    </div>
                    <div className={style.argument2}>
                        <div className={style.img2}> </div>
                        <h2 className={style.titleDesc2}>Свежие продукты</h2>
                        <p className={style.desc2}>Вся продукция хранится в хороших условиях тем самым продливая срок хранения</p>
                    </div>
                    <div className={style.argument3}>
                        <div className={style.img3}> </div>
                        <h2 className={style.titleDesc3}>Уникальное меню</h2>
                        <p className={style.desc3}>Ежедневно мы обновляем наше меню и том числе коктейльное</p>
                    </div>
                    <div className={style.argument4}>
                        <div className={style.img4}> </div>
                        <h2 className={style.titleDesc4}>Доставка</h2>
                        <p className={style.desc4}>Мы быстро доставляем вашу еду по указанному адресу</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
