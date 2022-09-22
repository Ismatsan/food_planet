import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./Pages/site/main/Main";
import Basket from "./Pages/site/basket/Basket";
import Header from "./components/Header/Header";
import Checkout from "./Pages/site/checkout/Checkout";
import Home from "./Pages/admin/home/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/admin/home" element={<Home/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;


