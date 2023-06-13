
import React from 'react';
import { NavLink } from 'react-router-dom';
const Portfolio = () => {
    return (
        <div>
             <NavLink to="/home" style={{ textDecoration: 'none' }} >
             <span className = 'backButton'>main menu </span> </NavLink>
             <div className = 'pagesBody'>
            <h1 >This is where my work will be</h1>
        </div></div>
    );
};
 
export default Portfolio;