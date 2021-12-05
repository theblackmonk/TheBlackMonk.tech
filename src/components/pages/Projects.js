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
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiAbstract082 />
                </div>
                <h3>Blockchain Kickstarter</h3>
                <h7>Udemy tutorial</h7>
                <br></br>
                <br></br>
                <h6>Problem Solution:</h6>
                <ul className='pricing__container-features'>
                  <li>Reduce scammers, pay vendor directly</li>
                  <li>Money is stored in a secure smart contract</li>
                  <li>No trusting third parties holding funds</li>
                  <li>Verify who recieved the money</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  View Here
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiAbstract116 />
                </div>
                <h3>Ethereum token exchange</h3>
                <h7>DAPP univerisity tutorial</h7>
                <br></br>
                <br></br>
                <h6>Problem Solution:</h6>
                <ul className='pricing__container-features'>
                  <li>Trade autonomously 24/7</li>
                  <li>No identification needed</li>
                  <li>All users treated equally</li>
                  <li>No blacklisting</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  View Here
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiAbstract069 />
                </div>
                <h3>ETH 2.0 Validator Crowdfunding</h3>
                <h7>built from scratch</h7>
                <br></br>
                <br></br>
                <h6>Problem Solution:</h6>
                <ul className='pricing__container-features'>
                  <li>Fundraising made easy</li>
                  <li>Collect 32 ETH from your network</li>
                  <li>Full transparency of validator shares</li>
                  <li>Practice start to finish on testnet</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  View Here
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Projects;