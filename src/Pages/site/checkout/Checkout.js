import React from 'react';
import s from './Checkout.module.css';
import cheesburg from './img/Cheesburg.png';
import pizza from './img/Pizz.png';

const Checkout = () => {
    return (
        <>
            <div className={s.wrapper}>
                <section className={s.checkout_first}>
                    <div className={s.container}>
                        <h3 className="sf-sem main-title">Оформление заказа</h3>
                    </div>
                </section>

                <section className={s.checkout_second}>

                    <div className={s.box}>
                        <div className={s.form}>
                            <p className={s.block_title}>Ваши контактные данные</p>
                            <div className="auth">
                                <ul className={s.nav_pills} id="pills-tab" role="tablist">
                                    <li className={s.nav_item}>
                                        <a className={s.nav_link} id="new-user-tab" data-toggle="pill"
                                           href="#new-user" role="tab" aria-controls="new-user" aria-selected="true">Я
                                            новый покупатель</a>
                                    </li>
                                    <li className={s.nav_item}>
                                        <a className={s.link} id="auth-user-tab" data-toggle="pill"
                                           href="#auth-user" role="tab" aria-controls="auth-user"
                                           aria-selected="false">Авторизоваться</a>
                                    </li>
                                </ul>
                                <div className={s.tab_content} id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="new-user" role="tabpanel"
                                         aria-labelledby="nav-home-tab">
                                        <div className={s.contact_info}>
                                            <div className={s.cell}>
                                                <input type="text" className={s.form_control}
                                                       placeholder="Фамилия"/>
                                            </div>
                                            <div className={s.cell}>
                                                <input type="text" className={s.form_control}
                                                       placeholder="Имя"/>
                                            </div>
                                            <div className={s.cell}>
                                                <input type="number" className={s.form_control}
                                                       placeholder="Мобильный телефон: 996555555555"/>
                                            </div>
                                            <div className={s.cell}>
                                                <input type="email" className={s.form_control}
                                                       placeholder="Email"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className={s.block_title}>Ваш заказ</p>
                            <div className={s.productsMainTitle}>
                                <div className={s.product}>
                                    <p className={s.prod}>Продукт</p>
                                </div>
                                <div className={s.col_2}>
                                    <p className={s.prod}>Количество</p>
                                </div>
                                <div className={s.col_2}>
                                    <p className={s.prod}>Цена</p>
                                </div>
                                <div className={s.toPay}>
                                    <p className={s.prod}>К оплате</p>
                                </div>
                            </div>

                            <div className={s.productInBasket}>
                                <div className={s.product1}>
                                    <div className={s.cheeseburger}>
                                        <img src={cheesburg} alt=""
                                             className={s.product_img}/>
                                    </div>
                                    <div className={s.titleProd}>
                                        <p className={s.prodName}>Чизбургер</p>
                                        <button className={s.showAtribut} type="button">
                                            Показать сведения о продукте
                                        </button>
                                    </div>
                                </div>
                                <div className={s.amount}>
                                    <p className={s.amountTitle}>Количество</p>
                                    <p className={s.sf_reg}>1</p>
                                </div>
                                <div className={s.priceBox}>
                                    <p className={s.priceTitle}>Цена</p>
                                    <p className={s.som_price}>94080 сом</p>
                                    <p className={s.usd_price}> $1120,0</p>
                                </div>
                                <div className={s.paymentBox}>
                                    <div>
                                        <p className={s.amountTitle}>К оплате</p>
                                        <p className={s.som_price}>
                                            94080 сом
                                        </p>
                                        <p className={s.usd_price}>
                                            $ 1120
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={s.productInBasket2}>
                                <div className={s.product2}>
                                    <div className={s.pizza}>
                                        <img src={pizza} alt=""
                                             className={s.product_img2}/>
                                    </div>
                                    <div className={s.titleProd2}>
                                        <p className={s.prodName2}>Пицца</p>
                                        <button className={s.showAtribut}
                                                type="button">
                                            Показать сведения о продукте
                                        </button>
                                    </div>
                                </div>
                                <div className={s.amount}>
                                    <p className={s.amountTitle}>Количество</p>
                                    <p className={s.sf_reg2}>1</p>
                                </div>
                                <div className={s.priceBox2}>
                                    <p className={s.amountTitle}>Цена</p>
                                    <p className={s.som_price}>73080 сом</p>
                                    <p className={s.usd_price}> $870,0</p>
                                </div>
                                <div className={s.paymentBox}>
                                    <div>
                                        <p className={s.amountTitle}>К оплате</p>
                                        <p className={s.som_price}>
                                            73080 сом
                                        </p>
                                        <p className={s.usd_price}>
                                            $ 870
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className={s.block_title}>Адрес доставки</p>
                            <div className={s.adressBox}>
                                <div className={s.pickupBox}>
                                    <label className={s.form_control} htmlFor="self">
                                        <input className={s.delivery_option} type="radio" name="address"
                                               value="Самовывоз" id="self" data-id="1" checked=""/>
                                        Самовывоз
                                    </label>
                                </div>
                                <div className={s.expressDeliveryBox}>
                                    <label className={s.form_control} htmlFor="courier">
                                        <input className={s.delivery_option} type="radio" name="address"
                                               value="Курьерская доставка" id="courier" data-id="2"/>
                                        Курьерская доставка
                                    </label>
                                </div>

                                <div className={s.deliveryCountry}>
                                    <select id="countryIdCheckout" className={s.countryForm_control}>
                                        <option value="" disabled="">Выберите страну доставки</option>
                                        <option value="Кыргызстан" selected="">Кыргызстан</option>
                                        <option value="Казахстан">Казахстан</option>
                                        <option value="Россия">Россия</option>
                                        <option value="Армения">Армения</option>
                                    </select>
                                </div>
                                <div className={s.adressDdelivery}>
                                    <input type="text" className={s.addressFormControl}
                                           placeholder="Введите адрес доставки" value=""/>
                                </div>
                            </div>
                        </div>
                        <div className={s.confirmContainer}>
                            <div className={s.confirm_block}>
                                <p className={s.block_title}>
                                    Итого:
                                </p>
                                <div className={s.total}>
                                    <p className={s.attr}>2 товара на сумму </p>
                                    <p className={s.val}>$1990,0</p>
                                </div>
                                <div className="d-flex justify-content-between mt-4">
                                    <p className={s.attr}>К оплате</p>
                                    <div>
                                        <p className={s.valBig}>
                                            <span className="checkout-converted-price"
                                                  data-price="167160">167160</span> сом
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className={s.btn}>
                                    Подтвердить заказ
                                </button>
                                <div className={s.agree}>Подтверждая заказ, я принимаю условия
                                    <a className="sf-light" href="/agreement" target="_blank">пользовательского
                                        соглашения</a>
                                </div>
                            </div>
                        </div>
                        <div className={s.payMethod}>
                            <p className={s.block_title}>Способ оплаты</p>
                            <div className={s.methods}>
                                <div className={s.disabledPayment}>
                                    <label className={s.formControl} htmlFor="cash">
                                        <input className={s.payment_option} type="radio" name="payment"
                                               value="Наличными" id="cash" checked=""/>
                                        Наличными
                                    </label>
                                </div>
                                <div className="increaseWidth col-md-6 col-12 px-1">
                                    <label className={s.formControl}
                                           htmlFor="bank_transfer">
                                        <input className={s.payment_option} type="radio" name="payment"
                                               value="Банковский перевод" id="bank_transfer"/>
                                        Банковский перевод
                                    </label>
                                </div>
                                <div className={s.disabledPayment}>
                                    <label className={s.formControl} htmlFor="payment_to_the_courier">
                                        <input className={s.payment_option} type="radio" name="payment"
                                               value="Оплата курьеру на месте" id="payment_to_the_courier"/>
                                        Оплата курьеру на месте
                                    </label>
                                </div>
                            </div>
                            <div className={s.methods2}>
                                <div className={s.disabledPayment}>
                                    <label className={s.formControl} htmlFor="paybox">
                                        <input className={s.payment_option} type="radio" name="payment"
                                               value="paybox" id="paybox"/>
                                        Оплата картой, электронными кошельками на сайте
                                    </label>
                                </div>
                                <div className={s.remittance}>
                                    <label className={s.formControl}
                                           htmlFor="remittance">
                                        <input className={s.payment_option} type="radio" name="payment"
                                               value="Денежный перевод" id="remittance"/>
                                        Денежный перевод
                                    </label>
                                </div>
                            </div>
                            <p className={s.block_title2}>Комментраий к заказу</p>
                            <div className={s.comment}>
                                <textarea className={s.form_comment} name="" rows="3"
                                          placeholder="Ваше сообщение">                    </textarea>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Checkout;