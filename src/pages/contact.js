
import React from 'react';
import { NavLink } from 'react-router-dom';
const Contact = () => {
    return (
        <div>
             <NavLink to="/home" style={{ textDecoration: 'none' }} ><span className = 'backButton'> main menu</span> </NavLink>
            <h1>This will be my contact info</h1>
        </div>
    );
};
 
export default Contact;