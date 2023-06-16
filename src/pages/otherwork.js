
import React, {useState} from 'react';
import {useNavigate } from 'react-router-dom';
import Project from '../components/Project'
import '../Assets/animations.css'
const Portfolio = () => {
    const [isTraveling, setIsTraveling] = useState(false)
    const animationStyleBackButton1 = {
        animationName : 'moveOutTop',
        animationDuration : '1s',
    
        transition: 'opacity .5s ease-out', 
      }
      const animationStyleBackButton2 = {
        animation: 'moveInTop .8s 1s',
        animationTimingFunction: 'ease-in',
        animationFillMode: 'backwards'
      }
      const navigate = useNavigate()
      const goToHome = () => {
        navigate('/home')
    }
    return (
        <div>
        
            <span className = 'backButton'  
            style = {isTraveling?animationStyleBackButton1:animationStyleBackButton2}
             onClick={() => {
                  setIsTraveling(true)
                  setTimeout(() => {
                  goToHome()
                  setIsTraveling(false)
                 }, 1500)}
                  
                }> main menu</span> 
             <div className = 'row'> <Project travel = {isTraveling}/><Project travel = {isTraveling}/><Project travel = {isTraveling}/>
       
        </div></div>
    );
};
 
export default Portfolio;