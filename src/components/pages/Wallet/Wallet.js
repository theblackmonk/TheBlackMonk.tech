import React from 'react';
import HeroSection from '../Homepage/HeroSection';
import { walObjOne, walObjTwo, walObjThree } from './Data';
import Projects from '../Projects';
import ComingSoon from '../../ComingSoon';
import Card from 'react-bootstrap/Card';
import { Button } from '../../Button';

function Wallet() {
  return (
    <>
      
      <h1 className='head'>Own Your Own Money<br></br></h1>
        <Card className='card'>
          <Card.Img variant="top" src="images/wallet.jpg" className='top' />
            <Card.Body>
      
                <Card.Text className='body'>
                <Card.Title className='top-lines'>Not Your Keys, Not Your Crypto</Card.Title>
                  
                  
                  You signed up for a coinbase account and bought some bitcoin.<br></br>
                  Great! You're already 80% done.<br></br>
                  The next step is to move your money into your personal possesion.<br></br>
                  Why?<br></br>
                  What you have currently is an IOU from coinbase agreeing to give you bitcoin.
                  <br />The same type of IOU you get when you deposit money into a bank.
                  <br />Except without the federal insurance, which is just another IOU.
                  <br />This could change at any time with a cyber attack, legislation, or when it hits the fan.
                
                  <br /><br />
                  
                  When you move your money into a crypto wallet and securly store the 12 word password, which I will refer to as the private key,
                  You own the money. Not even the FBI, IRS, Anonymous, or the KGB can take that money from you without the password. This is the most secure
                  way to store value on the planet. Bitcoin has never been hacked.
                  
                  <hr class="rounded"></hr>
                  <Card.Title className='top-lines'>How to get started</Card.Title>I personally reccomend you use Atomic Wallet. You can find it at atomicwallet.io<br />
                  <br />
                  <Button buttonSize='btn--wide' buttonColor='blue' type="button" item-align="right" onClick={(e) => {e.preventDefault(); window.location.href='https://atomicwallet.io/'} }>
                  Atomic Wallet</Button>
                  <br />
                  <br />
                  <Button buttonSize='btn--wide' buttonColor='blue' type="button" item-align="right" onClick={(e) => {e.preventDefault(); window.location.href='https://twitter.com/AtomicWallet'} }>
                  Atomic Wallet Twitter Page</Button>
                  <br />
                  <br /> General tip: There are many scams in crypto so if you need the correct website, don't google it. Find their twitter page and follow the link in their bio.
                  <br></br><br></br>
                  
                  Download the wallet and follow the instructions. This works on PC, Android, IOS, and Mac.
                  They will ask you to write down a twelve word password. This is what's known as your "Private Key"
                  <br /><br />
                  Anyone in possesion of this private key has 100% access to all money inside your wallet. The password is as good as cash.
                  Ideally store the password on paper in a water proof, fire proof place.
                  If you lose the password, there is no way to get your money back. You can even memorize it.
                  
                  
                  <hr class="rounded"></hr>
                  
                  <Card.Title className='top-lines'>Transferring your money</Card.Title> 
                  Youtube will be your best resource for this part.
                  <br /><br />
                  
                  Wherever your crypto is held Coinbase, Binance US, Voyager, Gemini, Kraken, you will be able to move the money off the exchange and into your personal possession.
                  <br /><br />There are a few places like cashapp, paypal, or robinhood that don't allow this yet. I never use these platforms unless I have to.

                  <br />I use Voyager for long term holds, or Binance US for the low fees.
                  <br></br><br></br>  
                  Youtube search "transferring bitcoin from coinbase to wallet".
                  <br /><br />
                  Open Atomic Wallet. Click on bitcoin and click recieve. This is your bitcoin public address.
                  <br />It will look like this: 1ZSDoJ2mBgvLYx7x54bP1DV15jbwJCWq6R<br />
                  <br />When transfering you must copy this exactly. Use copy paste because mispelling a letter will mean your money is lost forever. 
                  <br />Anyone with this address can send you bitcoin. There will be fees, so I like to make occasional large transfers. 
                  <br></br><br></br>  
                  Feel free to transfer a little bit first, just to make sure it works.
                  <br /> It may take around 20 minutes for the money to show in Atomic Wallet depending on network congestion.
                

                </Card.Text>
                
            </Card.Body>
        </Card>
      
    </>
  );
}

//<HeroSection {...bitObjThree} />

export default Wallet;
