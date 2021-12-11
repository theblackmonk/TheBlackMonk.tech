import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { GiMeditation } from 'react-icons/gi';
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

   
//<span class="square border-bottom border-dark border-1">
    return (
        <>
        <IconContext.Provider value={{ color: '#000000'}}>
        
            <div className="navbar">
            
                <div className="navbar-container container">
                
            
                    <Link to='/' className='navbar-logo' onClick=
                    {closeMobileMenu}>
                        <GiMeditation className='navbar-icon' />
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
                            <Link to='/About' className='nav-links'>
                                About
                            </Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/Bitcoin' className='nav-links'>
                            Bitcoin
                            </Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/Ethereum' className='nav-links'>
                                Ethereum
                            </Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/Meditation' className='nav-links'>
                                Meditation
                            </Link>
                        </li>
                        
                        <li className='nav-btn'>
                            {button ? ( 
                                <Link to='/youtube' className='btn-link'>
                                    <Button buttonStyle='btn--outline'>Youtube
                                    </Button>
                                </Link>) : (
                                <Link to='/youtube' className='btn-link' onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline'
                                    buttonSize='btn--mobile' onClick={(e) => {e.preventDefault(); window.location.href='https://www.youtube.com'; }}>
                                    Youtube
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
