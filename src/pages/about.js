
import React from "react";
import { NavLink } from 'react-router-dom';
const About = () => {
    return (
        <div>
                        
            <NavLink to="/home" style={{ textDecoration: 'none' }} >
            <span className = 'backButton'>main menu</span>  </NavLink>
            <div className = 'pagesBody' style= {{overflow: 'auto'}}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu justo ac lacus egestas auctor. Nam luctus tempor massa, eu pretium elit suscipit et. Fusce quam odio, gravida ornare velit ac, tempor dignissim augue.
            </p><br></br>
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras at purus nec dui vestibulum dictum non id elit. Vestibulum cursus euismod augue, eget molestie risus. Fusce sodales nulla quis aliquet gravida. Suspendisse potenti. In ut leo gravida, hendrerit arcu ut, euismod arcu.</p>
            <br></br> <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu justo ac lacus egestas auctor. Nam luctus tempor massa, eu pretium elit suscipit et. Fusce quam odio, gravida ornare velit ac, tempor dignissim augue.
            </p><br></br>
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras at purus nec dui vestibulum dictum non id elit. Vestibulum cursus euismod augue, eget molestie risus. Fusce sodales nulla quis aliquet gravida. Suspendisse potenti. In ut leo gravida, hendrerit arcu ut, euismod arcu.</p>
        </div></div>
    );
};
 
export default About;