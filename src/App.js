import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./Pages/site/main/Main";
import Basket from "./Pages/site/basket/Basket";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/basket" element={<Basket/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;


