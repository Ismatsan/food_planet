import React from 'react';
import s from './Home.module.css';
import Sidebar from "../components/Sidebar/Sidebar";
import Head from "../components/Head/Head";
import Cards from "../components/Cards/Cards";

const Home = () => {
    return (
        <div className={s.main}>
            <Sidebar/>
            <Head/>
            <Cards/>
        </div>
    );
};

export default Home;