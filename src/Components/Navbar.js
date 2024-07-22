import React, { useEffect, useState } from 'react'
import '../Style/navbar.css'
import phone from '../Images/phone.png'
import rec from '../Images/reconstruyendo.png'

const Navbar = () => {


    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 30) {  
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let navbarClasses = ['navbar-container'];
    if (scrolled) {
        navbarClasses.push('navbar-scrolled');
    }


  return (
    <div className={navbarClasses.join(' ')}>
        <a href="#home" className='navbar-content-name'>
            <img src={rec} alt="reconstruyendo"/>
        </a>
        <div className='navbar-content-items'>
            <a href="#about">
                <p>Sobre mí</p>
            </a>
            <a href="#contact">
                <p className='navbar-special-button'>
                    <span>Contacto</span>
                    <img src={phone} alt="phone"/>
                </p>
            </a>
        </div>
    </div>
  )
}

export default Navbar