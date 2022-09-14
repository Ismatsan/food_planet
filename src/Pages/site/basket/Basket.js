import React from 'react';
import style from './Basket.module.css';
import image from './images/Cheesburger.png';
import image1 from './images/Pizza.png';
import del from './images/x-circle.svg';
import arrow from './images/right-arr.svg';
import Main from "../main/Main";

const Basket = () => {
    return (
        <>
            <div className={style.wrapper}>
                <section className={style.basket_first}>
                    <div className={style.title}>

                        <div className={style.text}>
                            <h3 className="main-title">Корзина</h3>
                            <h4 className={style.main_little_description}>
                                Товары в вашей корзине
                            </h4>
                        </div>
                    </div>
                </section>

                <section className={style.basket_second}>
                    <div className={style.container}>
                        <div className={style.productsContainer}>
                            <div
                                className={style.products_main_title}>
                                <div className={style.col_4}>
                                    <p className={style.sf_reg}>Продукт</p>
                                </div>
                                <div className={style.col_2}>
                                    <p className={style.sf_reg}>Количество</p>
                                </div>
                                <div className={style.col_2}>
                                    <p className={style.sf_reg}>Комментарий</p>
                                </div>
                                <div className={style.col_2}>
                                    <p className={style.sf_reg}>Цена</p>
                                </div>
                                <div className={style.col_2}>
                                    <p className={style.sf_reg}>К оплате</p>
                                </div>
                            </div>
                            <div className={style.product_md_4}>
                                <div className={style.col_md_3}>
                                    <img src={image} className={style.product_img} alt=""/>
                                </div>
                                <div className={style.text_center}>
                                    <p className={style.iPhonePro}>Чизбургер</p>
                                </div>
                            </div>
                            <div className={style.amaunt}>
                                <p className={style.titleChangeInBasket}>Количество</p>
                                <input type="number" className={style.quantityChangeInBasket} value="1" data-max="100"/>
                            </div>
                            <div className={style.coment}>
                                <p className={style.titleComment}>Комментарий</p>
                                <input type="text" className={style.commentChangeInBasket} value=""/>
                            </div>
                            <div className={style.cost}>
                                <p className={style.costTitle}>Цена</p>
                                <p className={style.usd_price}>
                                    $
                                    <span>2</span>
                                </p>
                                <p className={style.rub_price}>
                                    <span>200</span>
                                    сом
                                </p>
                            </div>
                            <div className={style.toPay}>
                                <div>
                                    <p className={style.payTitle}>К оплате</p>
                                    <p className={style.usd_price}>
                                        $
                                        <span>2</span>
                                    </p>
                                    <p className={style.rub_price}>
                                        <span>200</span>
                                        сом</p>
                                </div>
                                <div className={style.delete}>
                                    <a className={style.deleteFromBasket} data-id="422" data-unique="17707">
                                        <img src={del} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={style.productInBasket}>
                            <div className={style.product2_md_4}>
                                <div className={style.col_md_3}>
                                    <img src={image1} alt="" className={style.product_img2}/>
                                </div>
                                <div className={style.text_center}>
                                    <p className={style.iPhone13}>Пицца</p>
                                </div>
                            </div>
                            <div className={style.amaunt2}>
                                <p className={style.titleChangeInBasket}>Количество</p>
                                <input type="number" className={style.quantityChangeInBasket2} data-unique="17708"
                                       value="1" data-max="100"/>
                            </div>
                            <div className={style.coment2}>
                                <p className={style.titleComment}>Комментарий</p>
                                <input type="text" className={style.commentChangeInBasket} data-unique="17708"
                                       value=""/>
                            </div>
                            <div className={style.cost}>
                                <p className={style.costTitle}>Цена</p>
                                <p className={style.usd_price}>
                                    $
                                    <span>2</span>
                                </p>
                                <p className={style.rub_price}>
                                    <span>200</span>
                                    сом
                                </p>
                            </div>
                            <div className={style.toPay2}>
                                <div>
                                    <p className={style.payTitle2}>К оплате</p>
                                    <p className={style.usd_price2}>
                                        $
                                        <span>2</span>
                                    </p>
                                    <p className={style.rub_price2}>
                                        <span>200</span>
                                        сом</p>
                                </div>
                                <div className={style.delete}>
                                    <a className={style.deleteFromBasket} data-id="423" data-unique="17708">
                                        <img src={del} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={style.count_element}>
                            <div className={style.total}>
                                <div className={style.col_6}>
                                    <p className={style.result_price}>
                                        Итого:
                                    </p>
                                </div>
                                <div className={style.col_6}>
                                    <p className={style.resultPriceUsd}>
                                        $ <span>4,0</span>
                                    </p>
                                    <p className={style.resultPriceConverted}>
                                        <span>400</span> сом
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.lastBlok}>
                            <a className={style.link} href={<Main/>}>
                                <img className={style.rotate180} src={arrow} alt=""/>
                                Продолжить покупки
                            </a>
                            <button id="basketBtnId"
                                    className={style.btn}>
                                ОФОРМИТЬ ЗАКАЗ
                            </button>
                        </div>
                    </div>
                    <div className={style.bb_grey}>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Basket;