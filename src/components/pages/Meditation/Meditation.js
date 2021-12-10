import React from 'react';
import HeroSection from '../Homepage/HeroSection';
import { medObjOne, medObjTwo, medObjThree, medObjFour } from './Data';
import Projects from '../Projects';
import ComingSoon from '../../ComingSoon';
import Card from 'react-bootstrap/Card';

function Meditation() {
  return (
    <>
    <h1 className='head'>Keep it simple</h1>
        <Card className='card'>
          <Card.Img variant="top" src="images/med1.png" className='top' />
            <Card.Body>
              <Card.Title className='top-line'>Meditation is for everyone</Card.Title>
                <Card.Text className='body'>
                  Sit in a chair, or on the floor. Set a timer for 5 minutes. Look directly infront of you and relax your gaze as if you were looking at a far away mountain.
                  Take 5 deep breaths. Close your eyes.
                  
          
                </Card.Text>
                <Card.Text className='body'>Focus on your breathe. Eventually your mind will start to wander. Maybe you start thinking about some holiday shopping you want to do,
                or the party next weekend. At the moment you become aware that your focus has shifted from your breathe to something else, bring your focus back to the breathe.
                You can also count from 1 to 10 repeatedly if that helps you focus longer. 
                At first it will be hard, but try not to scold yourself for losing focus on the breathe. Just observe from a nuetral standpoint. It's similar to relaxing a muscle.
                You cannot try to relax, relaxing is just the absence of trying anything.

                </Card.Text>
                <Card.Text className='body'>The key is to mediate a few minutes each day. With time you will learn to hold your focus for long periods of time,
                and regain your focus after you have become distracted by your phone, and ad, a conversation.

                </Card.Text>
                <Card.Text className='body'>
                “The goal of mediation is not to get rid of thoughts or emotions. The goal is to become more aware of your thoughts and emotions and learn how to move through them without getting stuck.” – Dr. P Goldin
                </Card.Text>
            </Card.Body>
        </Card>
      
      <HeroSection {...medObjOne} />

    </>
  );
}

//<HeroSection {...medObjOne} />

export default Meditation;