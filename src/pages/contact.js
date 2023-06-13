
import React from 'react';
import { NavLink } from 'react-router-dom';
const Contact = () => {
    return (
        





        <div>
            <NavLink to="/home" style={{ textDecoration: 'none' }} >
            <span className = 'backButton'> main menu</span> </NavLink>
            <div className = "contactCards">
                <div className = 'myCard'>
                <div className = 'myCard__side myCard__side--front cardOne'>Front</div>
                
                <div className = 'myCard__side myCard__side--back cardOne'>Back</div>
               </div>
               <div className = 'myCard'>
                <div className = 'myCard__side myCard__side--front cardTwo'>Front</div>
                
                <div className = 'myCard__side myCard__side--back cardTwo'>Back</div>
               </div>
               <div className = 'myCard'>
                <div className = 'myCard__side myCard__side--front cardThree'>Front</div>
                
                <div className = 'myCard__side myCard__side--back cardThree'>Back</div>
               </div>
        </div></div>
    );
};
 
export default Contact;