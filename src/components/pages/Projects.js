import React from 'react';
import { Button } from '../Button';
import './Projects.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiAbstract069, GiAbstract116, GiBowenKnot, GiAbstract082 } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Portfolio</h1>
          <div className='pricing__container'>
            <Link to='/projects/stockphotos' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiAbstract082 />
                </div>
                <h3>Free High Res Photos</h3>
                <h6>REST API</h6>
                <br></br>
                <br></br>
                <h6>Problem Solution:</h6>
                <ul className='pricing__container-features'>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'
                onClick={(e) => {e.preventDefault(); window.location.href='https://www.github.com/theblackmonk'; }}>
                  View Here
                </Button>
              </div>
            </Link>
            <Link to='/about' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiAbstract116 />
                </div>
                <h3>Ethereum token exchange</h3>
                <h6>DAPP univerisity tutorial</h6>
                <br></br>
                <br></br>
                <h6>Problem Solution:</h6>
                <ul className='pricing__container-features'>
                  <li>Trade autonomously 24/7</li>
                  <li>No identification needed</li>
                  <li>All users treated equally</li>
                  <li>No blacklisting</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'
                onClick={(e) => {e.preventDefault(); window.location.href='https://www.github.com/theblackmonk'; }}>
                  View Here 
                </Button>
              </div>
            </Link>
            <Link to='/about' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiAbstract069 />
                </div>
                <h3>ETH 2.0 Validator Crowdfunding</h3>
                <h6>built from scratch - Coming Soon</h6>
                <br></br>
                <br></br>
                <h6>Problem Solution:</h6>
                <ul className='pricing__container-features'>
                  <li>Fundraising made easy</li>
                  <li>Collect 32 ETH from your network</li>
                  <li>Full transparency of validator shares</li>
                  <li>Practice start to finish on test net</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'
                onClick={(e) => {e.preventDefault(); window.location.href='https://www.github.com/theblackmonk'; }}>
                  View Here
                </Button>
              </div>
            </Link>
          </div>
        </div>
        <article className="cards">
      <Button buttonSize='btn--mobile' buttonColor='blue' type="button"
           onClick={(e) => {e.preventDefault(); window.location.href='https://www.github.com/theblackmonk'; }} >
           GitHub  
      </Button>
      <Button buttonSize='btn--mobile' buttonColor='blue' type="button"
           onClick={(e) => {e.preventDefault(); window.location.href='https://www.linkedin.com/in/davidoneill123/'; }} >
           LinkedIn 
      </Button>
      </article>
      </div>
      
    </IconContext.Provider>
  );
}

export default Projects;

//https://www.github.com/theblackmonk
//https://www.bit.ly/3DLexXo