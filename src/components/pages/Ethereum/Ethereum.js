import React from 'react';
import HeroSection from '../Homepage/HeroSection';
import { ethObjOne, ethObjTwo, ethObjThree, ethObjFour } from './Data';
import Projeccts from '../Projects';
import ComingSoon from '../../ComingSoon';
import Card from 'react-bootstrap/Card';

function Ethereum() {
  return (
    <>
    <h1 className='head'>Ethereum: The First World Computer</h1>
        <Card className='card'>
          <Card.Img variant="top" src="images/Evolve.png" className='top' />
            <Card.Body>
              
                <Card.Text className='body'>
                <Card.Title className='top-lines'>What is a smart contract?</Card.Title>
                Banking used to be done entirely on paper. Checks, weekly visits to the bank, no bill automation, etc. Then computers came along and allowed you to do most of your banking from the comfort of your home.
                Smart Contracts are the next evolution of banking and many other industries. Rather than trust a bank to hold your money, and confirm credit card transactions, your transactions are handled
                by a programable contract. This removes the middleman and greatly imroves security, while reducing cost. Each individual transaction is as difficult to hack as hacking the entire Ethereum network. No more fake credit card skimmers at the gas
                station.  
                  
              
                <br /><br /> 
                You're a farmer in Uganda that has no bank account and has never been approved for a loan. 
                A few years back you started buying Ethereum to store your wealth along with the rest of the community.
                Today the community decided to pool together 15 Ethereum as collateral and get a two-year loan from a decentralized loan platform.
                <br /><br />
                Smart Contracts allow an investing group in Atlanta that owns 100 Ethereum to loan their money out and earn interest.
                <br /><br />
                You are guaranteed approval for a loan of $21,000 at 5.95% and purchase automated farm equipment that doubles your yearly output.
                <br /><br />
                The $21,000 is provided by the investing group in Atlanta. The smart contract does everything a bank would do.
                In this case it is code on Ethereum that holds the collateral until you pay off the loan or default.
                <br /><br />
                Over two years you pay the loan back.
                When you finish paying the loan, the community gets the 15 Ethereum back they put up as collateral. In the meantime, the community's Ethereum has doubled in value!
                <br /><br />
                This is an example of decentralized finance that is available now. There are many other things smart contracts are useful for, many have yet to be discovered.
                <br /><br />
                A Smart Contract is a code contract that runs on a network like Ethereum that handles money and eliminates the need for third parties like, credit card companies, banks, record labels, etc. by providing cryptographic security.
                <br /><br />
                The end result is Peer to Peer or person to person transactions.  
                </Card.Text>
            </Card.Body>
        </Card>
        
      <HeroSection {...ethObjOne} />
      <HeroSection {...ethObjTwo} />
      <HeroSection {...ethObjThree} />
    </>
  );
}

export default Ethereum;