import React from 'react';
import style from './Main.module.css';
import Delivery from "../../../components/FirstDispley/Delivery/Delivery";
import Burger from "../../../components/FirstDispley/Burger";
import FirstBlok from "../../../components/FirstBlok/FirstBlok";
import SecondBlok from "../../../components/SecondBlok/SecondBlok";
import About from "../../../components/About/About";
import Reviews from "../../../components/Reviews/Reviews";
import Footer from "../../../components/Footer/Footer";

const Main = () => {
    return (
        <>
            <div className={style.desk}>
                <div className={style.first}>
                    <Delivery/>
                    <Burger/>
                </div>
                <div className={style.firstBlok}>
                    <FirstBlok/>
                </div>
                <div className={style.secondBlok}>
                    <SecondBlok/>
                </div>
                <div className={style.about}>
                    <About/>
                </div>
                <Reviews/>
                <Footer/>
            </div>
        </>
    );
};

export default Main;