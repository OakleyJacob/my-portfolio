
import React from 'react';
import { NavLink } from 'react-router-dom';
const Skills = () => {
    return (
        <div>
             <NavLink to="/home" style={{ textDecoration: 'none' }} >
             <span className = 'backButton'>main menu</span>  </NavLink>
            <h1>This will be my skills section
            </h1>
        </div>
    );
};
 
export default Skills;