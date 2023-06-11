
import React from 'react';
import { useNavigate } from "react-router-dom";
 
const Home = (props) => {
    const navigate = useNavigate()
    const goToContact = () => {
     navigate('/contact')
    }
    return (
        <div>
            <div className = 'navMenu'>
            <h2 onClick={() => goToContact()}>New Game</h2>
            <h2>Load Game</h2>
            <h2>Options</h2>
            <h2>Credits</h2>
            </div>
        
        </div>
    );
};
 
export default Home;