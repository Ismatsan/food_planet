import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <div className="w3-content" style={{maxWidth: "1400px"}}>
                <Header/>
            </div>
            <Footer/>
        </>
    );
};

export default App;