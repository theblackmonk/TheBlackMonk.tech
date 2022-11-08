import React from 'react';
import HeroSection from './HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data'; //object we will pass in with all properties
import Projects from '../Projects';


function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjFour} />
            <HeroSection {...homeObjFive} />
        </>
    );
}

export default Home

/*
<HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjFour} />
            <Projects />
            <HeroSection {...homeObjFive} />

*/
