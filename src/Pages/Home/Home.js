import React from 'react';
import s from './Home.module.css';
import Desktop from "./Desktop/Desktop";

const Home = () => {
    return (
        <div className={s.main}>
            <Desktop/>
        </div>
    );
};

export default Home;