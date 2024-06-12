import React from 'react';
import { Herosec } from './components/herosec';
import { Section1 } from './components/section1';
import { Section2 } from './components/section2';
import { Aboutsec } from './components/aboutsec';
import { Navbar } from '../../layouts/navbar';
import { Section3 } from './components/section3';
import { Footer } from '../../layouts/footer';

export const HomePage = () => {
    return (
        <div>
            <Herosec/>
            <Aboutsec/>
            <Section1/>
            <Section2/>
            <Section3/>
        </div>
    );
};

