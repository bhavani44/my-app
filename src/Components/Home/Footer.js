import React from 'react';

function Footer() {
    return (

        <nav style={{ backgroundColor: "#333333" }} className="navbar fixed-bottom navbar-dark bg-dark text-light">
            <img src={require('../Images/NIN logo 2.jpg')}
              width="300rem"
              height="80rem" alt="Company Logo" /> 
            <p className='text-light m-auto text-center'>&copy;{new Date().getFullYear} Developed by NIN NICHE Division - All Rights Reserved</p>
        </nav>
    )
}

export default Footer;