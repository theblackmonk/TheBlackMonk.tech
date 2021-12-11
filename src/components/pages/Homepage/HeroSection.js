import React from 'react';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import { ScrollToProjects } from '../../ScrollToTop';


function HeroSection({lightBg, topLine, lightText, lightTextDesc, headline, description, description2, description3, description4,
buttonLabel, img, alt, imgStart, linked, exit, href, btn
}) {

    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row"
                    style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                      <div className='col'>
                          <div className='home__hero-text-wrapper'>
                              <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={'home__hero-subtitle dark'}>
                                {description}</p>
                                <p className={'home__hero-subtitle dark'}>
                                {description2}</p>
                                <p className={'home__hero-subtitle dark'}>
                                {description3}</p>
                                <p className={'home__hero-subtitle dark'}>
                                {description4}</p>
                                
                                {btn ? '' : <Link to={linked} >
                                    <Button buttonSize='btn--wide' buttonColor='blue' type="button"
                                        onClick={ exit === 'link' ? (e) => {e.preventDefault(); window.location.href=href; } : ''} >
                                        {buttonLabel}
                                    </Button>
                                </Link>}
                                
                          </div>
                      </div>
                      <div className='col'>
                        <div className='home__hero-img-wrapper'>
                            <img src={img} alt={alt} className='home__hero-img' />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection
