import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Burger from "./components/FirstDispley/Burger";
import style from './App.css';

const App = () => {
    return (
        <>
            <div className={style.first} style={{maxWidth: "1400px"}}>
                <Header/>
                <Burger/>
            </div>
            <div>

            </div>
            <Footer/>
        </>
    );
};

export default App;