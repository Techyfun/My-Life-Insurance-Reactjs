import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center text-white notFound'>
            <div className="content">
                <h1 className='fw-bold'>4🙃4</h1>
                <h2 className='fw-bold'>Wanna go back to home?</h2>
                <Button className='btn-primary fs-3 rounded-pill'><Link className='text-white text-decoration-none' to={'/'}>Go to home</Link></Button>
            </div>
        </div>
    );
};

export default NotFound;