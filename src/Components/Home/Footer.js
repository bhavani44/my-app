import React from 'react';

function Footer() {
    return (

        <nav style={{ backgroundColor: "#333333" }} class="navbar fixed-bottom navbar-dark bg-dark text-light">
            <p className='text-light m-auto text-center'>&copy;{new Date().getFullYear} Developed by NIN NICHE Division - All Rights Reserved</p>
        </nav>
    )
}

export default Footer;