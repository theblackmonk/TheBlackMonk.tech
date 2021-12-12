import React from 'react';
import HeroSection from '../Homepage/HeroSection';
import { bitObjOne, bitObjTwo, bitObjThree, bitObjFour, bitObjFive, bitObjSix, bitObjSeven } from './Data';
import Projects from '../Projects';
import ComingSoon from '../../ComingSoon';
import Card from 'react-bootstrap/Card';

function Bitcoin() {
  return (
    <>
      
      <h1 className='head'>Don't watch the price<br></br>learn the fundamentals</h1>
        <Card className='card'>
          <Card.Img variant="top" src="images/Evolve.jpg" className='top' />
            <Card.Body>
      
                <Card.Text className='body'>
                <Card.Title className='top-lines'>In a digital world, own digital assets</Card.Title>
                  
                  
                  Bitcoin is finite.<br></br>
                  There are only 21 million bitcoins that will ever exist in the universe.<br></br>
                  There are 8 billion people on the planet.<br></br>
                  That's 0.002625 bitcoin per person if we split it evenly<br></br>
                  (0.002625 is $183 if bitcoin is at $70,000)
                  <br />Bitcoin is extremely scare
                
                  <br /><br />
                  
                  If you are new to bitcoin, don't think of it as a currency. It will become a currency eventually, but today think of it like this.
                  Bitcoin is a brand-new asset class. New asset classes are rare, and always benefit early investors. (Stocks, Real Estate, Forex) If you were not born
                  with a trust fund, a significant inheritance, or into a successful family business, you now have a unique advantage. It is the Early Mover Advantage, by the time you pass on your bitcoin to your children, and grandchildren, and great grandchildren it will
                  be the equivalent of everything mentioned above.
                  
                  <hr class="rounded"></hr>
                  <Card.Title className='top-lines'>There are many critiques of bitcoin</Card.Title>It's too slow, it uses too much power, it's too volatile, etc.
                  You must understand that bitcoin is a computer program and is therefore not bound to the exact rules of physical currency.<br></br><br></br>
                  
                  To put this into perspective imagine the government could program the US dollar.
                  Whenever an item is purchased and taxes are paid, 0.1% of those taxes is removed from circulation.
                  On a nationwide scale this would add up, and mean hundreds of thousands of dollars would be taken out of circulation.
                  The program would execute whenever inflation is above 3% and programmatically bring it back to 0%
                  <br></br><br></br>
                  Ethereum made a similar upgrade to their currency in the August 2021 with the EIP-1559 upgrade. Every transaction removes a small amount of Ethereum from circulation, making the entire currency deflationary.
                  If no new people buy in, but people continue to transact, the price will continue to rise as supply drops.
                  <hr class="rounded"></hr>
                  
                  <Card.Title className='top-lines'>Comparing Crypto Currency to Fiat Currency</Card.Title> 
                  such as the Dollar, Pound, or Yen is like comparing a Ford Model T to the horse.
                  It's arguable a horse was better than the Model T at that time. However, the horse was starting to decline, and the Model T was a technology
                  with endless upgrades and improvements in it's future. Bitcoin has had more than 50 upgrades and will continue to improve in the future.
                  <br></br><br></br>  
                  The gap in superiority between Crypto Currency and Fiat Currency will continue to grow until every government ensures their fiat currency is completely digital.
                  China has already tested their Digital Yuan by initially giving it out for free to citizens to facilitate use.
                  The same way we are required to pay taxes, in dollars, is the same way we will be required to use the digital currencies. 
                  <br></br><br></br>  
                We have seen the rise of digital tech giants like Facebook and Google, and what they become after they are monopolies. 
                Each person votes with their dollars what the next currency monopoly will be.

                  <br></br><br></br>  
                  Our current financial system is ruled by the Federal Reserve, Quantitative Easing, Money Printing, and Fractional Reserve banking.
                  <br></br><br></br>  
                  “It is well enough that people of the nation do not understand our banking and monetary system, for if they did, I believe there would be a revolution before tomorrow morning.” ― Henry Ford.
                  <br></br><br></br>
                  Bitcoin is ruled by Democracy, Peace of mind, Finality, Personal banking, Security, the list goes on.
                  
                

                </Card.Text>
                
            </Card.Body>
        </Card>

      <HeroSection {...bitObjOne} />  
      <HeroSection {...bitObjTwo} />
      <HeroSection {...bitObjFive} />
      <HeroSection {...bitObjSix} />
      
      
    </>
  );
}

//<HeroSection {...bitObjThree} />

export default Bitcoin;
