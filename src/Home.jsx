import React from 'react';
// import { NavLink } from 'react-router-dom';
import Common from './Common';
import web from "../src/images/s9.jpg";
const Home = () => {
    return ( <>
       
 <Common name='Grow and Explore yourself with '
  imgsrc={web} 
  visit='/service' btname="Get started"/>
        </>
    )
}

export default Home;