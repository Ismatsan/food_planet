import React from 'react';
import style from "./Reviews.module.css";

const Reviews = () => {
    return (
        <>
            <div className={style.reviews}>
                <h1 className={style.title}>Отзывы</h1>
                <div className={style.revs}>
                    <div className={style.review}>
                        <div className={style.frame}>
                            <div className={style.face}> </div>
                            <div className={style.message}>
                                <div className={style.name}>Улан</div>
                                <div className={style.pen}> </div>
                                <p className={style.text}>Большое спасибо! 5 пицц доставили даже быстрее чем планировалось. Пицца была горячая и всему коллективу понравилась! День Рождения прошел отлично! :)</p>
                                <p className={style.date}>02.07.2020</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.review2}>
                        <div className={style.frame2}>
                            <div className={style.face2}> </div>
                            <div className={style.message2}>
                                <div className={style.name2}>Сергей</div>
                                <div className={style.pen2}> </div>
                                <p className={style.text2}>Очень вкусные роллы Хаки, всем рекомендую! заказали в первый раз и теперь станем постоянными клиентами! Спасибо!</p>
                                <p className={style.date2}>04.07.2020</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.review3}>
                        <div className={style.frame3}>
                            <div className={style.face3}> </div>
                            <div className={style.message3}>
                                <div className={style.name3}>Алекс</div>
                                <div className={style.pen3}> </div>
                                <p className={style.text3}>Очень избирателен в еде, и Уже в третий раз не разочаровываюсь в Food Planet, советую всем! Жена тоже довольна!</p>
                                <p className={style.date3}>05.07.2020</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.review4}>
                        <div className={style.frame4}>
                            <div className={style.face4}> </div>
                            <div className={style.message4}>
                                <div className={style.name4}>Жамиля</div>
                                <div className={style.pen4}> </div>
                                <p className={style.text4}>Хочу поблагодарить за бургер !Очень вкусненький в меру остренький) Спасибо,удивили!)</p>
                                <p className={style.date4}>06.07.2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Reviews;