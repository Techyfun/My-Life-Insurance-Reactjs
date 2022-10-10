import React from 'react';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Insurance from "../Components/Insurance/Insurance";
const Home3 = () => {
    return (
        <div className='index-3'>
            <Header page={"quotes-reviews"}/>
            <Insurance page={"Home3"}/>
            <Footer page={"Home3"}/>
        </div>
    );
};

export default Home3;