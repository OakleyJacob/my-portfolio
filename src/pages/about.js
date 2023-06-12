
import React from "react";
import { NavLink } from 'react-router-dom';
const About = () => {
    return (
        <div>
                        
            <NavLink to="/home" style={{ textDecoration: 'none' }} >
            <span className = 'backButton'>main menu</span>  </NavLink>
            <h1>
                This is where my developer resume and education history will be.
            </h1>
        </div>
    );
};
 
export default About;