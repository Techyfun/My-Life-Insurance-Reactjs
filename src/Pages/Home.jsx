import React from 'react';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Insurance from "../Components/Insurance/Insurance";
const Home = () => {
    return (
        <div className='index'>
            <Header page={"Home"}/>
            <Insurance page={"Home"}/>
            <Footer page={"Home"}/>
        </div>
    );
};

export default Home;