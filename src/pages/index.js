
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../Assets/animations.css'
 
const Home = (props) => {
    const navigate = useNavigate()
    const goToContact = () => {
        navigate('/contact')
    }
    const goToAbout = () => {
        navigate('/about')
    }
     const goToOtherWork = () => {
        navigate('/portfolio')
    }
    const goToSkills = () => {
        navigate('/skills')
    }

    
    const [isHovered1, setIsHovered1] = useState("a");
    const [isHovered2, setIsHovered2] = useState("a");
    const [isHovered3, setIsHovered3] = useState("a");
    const [isHovered4, setIsHovered4] = useState("a");



    const handleMouseEnter1 = () => {
      setIsHovered1(true);
    };
  
    const handleMouseLeave1 = () => {
      setIsHovered1(false);
    };

    const handleMouseEnter2 = () => {
        setIsHovered2(true);
      };
    
      const handleMouseLeave2 = () => {
        setIsHovered2(false);
      };
      
    const handleMouseEnter3 = () => {
        setIsHovered3(true);
      };
    
      const handleMouseLeave3 = () => {
        setIsHovered3(false);
      };
      
    const handleMouseEnter4 = () => {
        setIsHovered4(true);
      };
    
      const handleMouseLeave4 = () => {
        setIsHovered4(false);
      };
   const myStyle = {
        opacity: 0,
        transition: 'opacity .5s ease-out',
       
        
    }
    const myOtherStyle = {
        opacity: 1,
        transition: 'opacity .5s ease-in', 

    
    }


    return (
        <div>
            <div className = 'navMenu'>

            <h2><span className ='routeButton one' 
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1} 
                onClick={() => goToContact()}>
                New Game </span>
                <span className ='explain one'
                style = {isHovered1 === 'a'? null:isHovered1? myStyle:myOtherStyle}>
                contact me</span></h2>

            <h2><span className ='routeButton two' 
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2} 
                onClick={() => goToOtherWork()}>Load Game </span>
                <span className ='explain two'
                style = {isHovered2 === 'a'? null:isHovered2? myStyle:myOtherStyle}>
                my past work</span></h2> 

            <h2><span className ='routeButton three' 
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3} 
                onClick={() => goToSkills()}>Options </span>
                <span className ='explain three'
                style = {isHovered3 === 'a'? null:isHovered3? myStyle:myOtherStyle}>
                my skills</span></h2>

            <h2><span className ='routeButton four' 
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4} 
                onClick={() => goToAbout()}>Credits </span>
                <span className ='explain four' 
                style = {isHovered4 === 'a'? null:isHovered4? myStyle:myOtherStyle}>
                my education</span></h2>
            </div>
        
        </div>
    );
};
 
export default Home;