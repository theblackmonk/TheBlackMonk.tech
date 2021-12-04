import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data'; //object we will pass in with all properties
import Pricing from '../Pricing';


function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjFour} />
            <Pricing />
            <HeroSection {...homeObjFive} />
        </>
    );
}

export default Home
