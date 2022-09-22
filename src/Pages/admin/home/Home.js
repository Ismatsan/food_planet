import React from 'react';
import s from './Home.module.css';
import Sidebar from "../components/Sidebar/Sidebar";
import Head from "../components/Head/Head";

const Home = () => {
    return (
        <div className={s.main}>
            <Sidebar/>
            <Head/>
        </div>
    );
};

export default Home;