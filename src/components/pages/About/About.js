import React from 'react';
import HeroSection from '../Homepage/HeroSection';
import { aboutObjOne, aboutObjTwo, aboutObjThree, aboutObjFour } from './Data';
import Projects from '../Projects';
import ComingSoon from '../../ComingSoon';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './About.css';
//import '../Homepage/HeroSection.css';

function About() {
  return (
    <>
      <h1 className='head'>Who is TheBlackMonk</h1>
        <Card className='card'>
          <Card.Img variant="top" src="images/hyperbolic-3.png" className='top' />
            <Card.Body>
              
                <Card.Text className='body'>
                <Card.Title className='top-line'>Behind the name</Card.Title>
                  In the TV show Dragon Ball Z, Goku enters the Hyperbolic Time Chamber.
                  Facing an alien invader that is too powerful, Goku stays in the chamber to train and get stronger. One year inside the time chamber is
                  one day to everyone outside and allows you to make one year's progress in one day.
                  The environment inside has ten times the gravity of earth and is completely empty and devoid of distractions. 
                </Card.Text>
                <Card.Text className='body'>Focus is nothing more than the absence of distraction.
                  Monk life is minimal, simple, routine, and therefore hyper-focused.
                  Which allows a monk, or a group of monks to achieve a specific goal in less time.
                </Card.Text>
                <Card.Text className='body'>

                </Card.Text>
                <Card.Text className='body'>Being the first monk programmer, I had to come up with a unique title.
                Hence, TheBlackMonk.
                </Card.Text>
            </Card.Body>
        </Card>
      
      <HeroSection {...aboutObjTwo} />
      <HeroSection {...aboutObjOne} />
      <Projects />

    </>
  );
}

export default About;