import React from 'react';
import HeroSection from '../Homepage/HeroSection';
import { bitObjOne, bitObjTwo, bitObjThree, bitObjFour } from './Data';
import Projects from '../Projects';
import ComingSoon from '../../ComingSoon';
import Card from 'react-bootstrap/Card';

function Bitcoin() {
  return (
    <>
      
      <h1 className='head'>What's the Big Deal</h1>
        <Card className='card'>
          <Card.Img variant="top" src="images/evolve.png" className='top' />
            <Card.Body>
              <Card.Title className='top-lines'>In a digital world, own digital assets</Card.Title>
                <Card.Text className='body'>
                  The Bottom line: For any store of value asset, Scarcity = Value and Abundance = Worthless.
                  There are only 21 million bitcoin that will ever exist in the universe. 
                  There are 8 billion people on the planet. I'll let you do the math.
                </Card.Text>  
                <Card.Text className='body'>  
                  Each day another individual researches the fundamentals and understands bitcoin is on track to become the
                  greatest currency ever created. Bitcoin is the only finite currency. No more can be created or taken away. 
                </Card.Text>
                <Card.Text className='body'>
                  Humanity is transitioning from the physical world into the digital world. There is a clear exponential progression
                  from early computers, to smartphones, to snapchat filters, to Virtual Reality Headsets, and so on.
                  There is only one link on this website away from my content. This is it. The bitcoin whitepaper
                   
                </Card.Text>
                <Card.Text className='body'>Focus is nothing more than the abscence of distraction.
                  Monk life is minimal, simple, routine, and therefore hyper-focused.
                  Which allows a monk, or a group of monks to achieve a specific goal in less time.
                </Card.Text>
                <Card.Text className='body'>Being the first monk programmer, I had to come up with a unique title.
                Hence, TheBlackMonk.
                </Card.Text>
            </Card.Body>
        </Card>
        
      <HeroSection {...bitObjTwo} />
      <ComingSoon />
    </>
  );
}

//Don't watch the price. Learn the fundamentals

export default Bitcoin;