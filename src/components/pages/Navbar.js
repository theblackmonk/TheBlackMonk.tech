import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiPlanet } from 'react-icons/bi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../Button';
import './Navbar.css';  //this css has modes
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] =useState(true);

    const handleClick = () => setClick(!click);
    //mobile
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerwidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    
    useEffect(() => {
        showButton();
    }, []);


    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className='navbar-logo' onClick=
                    {closeMobileMenu}>
                        <BiPlanet className='navbar-icon' />
                        TBM
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/Services' className='nav-links'>
                                Portfolio
                            </Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/products' className='nav-links'>
                                Bitcoin
                            </Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/gallery' className='nav-links'>
                                Gallery
                            </Link>
                        </li>
                        <li className='nav-btn'>
                            {button ? ( 
                                <Link to='/sign-up' className='btn-link'>
                                    <Button buttonStyle='btn--outline'>SIGN UP
                                    </Button>
                                </Link>) : (
                                <Link to='/sign-up' className='btn-link' onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline'
                                    buttonSize='btn--mobile'>
                                    SIGN UP
                                    </Button>
                                </Link>
                            )}
                        </li>

                    </ul>
                </div>
            </div>
        </IconContext.Provider>
        </>
    );
}

export default Navbar
