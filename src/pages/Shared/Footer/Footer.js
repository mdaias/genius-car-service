import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <p><small className='font-bold text-2xl'>copyright @ {year} </small></p>
        </footer>
    );
};

export default Footer;