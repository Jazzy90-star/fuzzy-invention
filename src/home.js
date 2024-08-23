import React from "react";
import Navs from "./navbar";
import Container from 'react-bootstrap/Container';
import HomeCarousel from "./imagecar";


function Home() {
    return (
        <>
        <Container>    
  <h1> Welcome to Dutch Girl Cleaning!</h1><h5> "FOR THAT OLD FASHIONED WAY OF CLEANING"</h5></Container>
  <br></br>
   <HomeCarousel />
  <Container>
  <h5>Maintaining a clean and organized home or business can be overwhelming, especially when time is scarce. With only 24 hours in a day, it's hard to keep up with the demands of work, family, and personal life. And yet, no one wants to live or work in an unclean environment. So, what's the solution?
Investing in professional cleaning services is a smart decision for anyone looking to reclaim their free time and enjoy a clean and comfortable space. At Dutch Girl Cleaning, our team of expert cleaners provides top-notch cleaning services that exceed our clients' expectations. Our clients keep coming back because we don't just clean the surface - we tackle the often-overlooked and hard-to-reach areas, leaving your home or business spotless and sanitized.</h5>
</Container>
   </> );
}

export default Home