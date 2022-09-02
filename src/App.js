import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Burger from "./components/FirstDispley/Burger";
import style from './App.css';
import Delivery from "./components/FirstDispley/Delivery/Delivery";
import FirstBlok from "./components/FirstBlok/FirstBlok";
import SecondBlok from "./components/SecondBlok/SecondBlok";
import About from "./components/About/About";

const App = () => {
    return (
        <div className={style.desk}>
            <div className={style.first}>
                <Header/>
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
            <Footer/>
        </div>
    );
};

export default App;