import React from 'react';
// import { NavLink } from 'react-router-dom';
import web from '../src/images/s12.jpg'
import Common from './Common';
// import web from "../src/images/im2.svg";
const About = () => {
    return ( <>
      <Common name='Welcome to About page' 
      imgsrc={web} 
      visit='/contact' btname="Contact Now"/>
        </>
    )
}

export default About;