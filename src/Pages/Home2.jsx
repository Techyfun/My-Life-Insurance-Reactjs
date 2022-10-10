import React from 'react';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Insurance from "../Components/Insurance/Insurance";
const Home2 = () => {
    return (
        <div className='index-2'>
        <Header page={"Home2"}/>
            <Insurance page={"Home2"}/>
            <Footer page={"Home2"}/>
        </div>
    );
};

export default Home2;