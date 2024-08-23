import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Contact from "./contactus";
import Services from "./services";
import Testimonials from "./testimonials";
import About from "./aboutus";

function NavRoutes() {
    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/aboutus" element={<About/>}/>
            <Route path="/testimonials" element={<Testimonials/>}/> 
            <Route path="/services" element={<Services/>}/>
            <Route path="/contactus" element={<Contact/>}/>
        </Routes>
    );
}

export default NavRoutes;