
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../Assets/animations.css'
 
const Home = () => {
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
    const [isTraveling, setIsTraveling] = useState(false)


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

    const animationStyle1 = {
      animationName : 'moveOutLeft',
      animationDuration : '.5s',
    
      animationDelay: '.4s',
      opacity: 0,
      transition: 'opacity .5s ease-out', 
    }
    const animationStyle2 = {
      animationName : 'moveOutLeft',
      animationDuration : '.5s',
      
      animationDelay: '.3s',
      opacity: 0,
      transition: 'opacity .5s ease-out', 
    }
    const animationStyle3 = {
      animationName : 'moveOutLeft',
      animationDuration : '.5s',
  
      animationDelay: '.2s',
      opacity: 0,
      transition: 'opacity .5s ease-out', 
    }
    const animationStyle4 = {
      animationName : 'moveOutLeft',
      animationDuration : '.5s',
      opacity: 0,
      transition: 'opacity .5s ease-out', 
      
     
    }
    return (
        <div>
            <div className = 'navMenu'>

            <h2><span className ='routeButton one' 
            style = {isTraveling?animationStyle1:null}
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1} 
                onClick={() => {
                  setIsTraveling(true)
                  setTimeout(() => {
                  goToContact()
                  setIsTraveling(false)
                 }, 800)}
                  
                }>
                New Game </span>
                <span className ='explain one'
                style = {isHovered1 === 'a' && !isTraveling? null:isHovered1|| isTraveling?  myStyle:myOtherStyle }
                >
                contact me</span></h2>

            <h2><span className ='routeButton two' 
            style = {isTraveling?animationStyle2:null}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2} 
                onClick={() => {
                  setIsTraveling(true)
                  setTimeout(() => {
                  goToOtherWork()
                  setIsTraveling(false)
                 }, 1500)}
                  
                }>Load Game </span>
                <span className ='explain two'
                style = {isHovered2 === 'a' && !isTraveling? null:isHovered2|| isTraveling? myStyle:myOtherStyle}
                >
                my past work</span></h2> 

            <h2><span className ='routeButton three' 
            style = {isTraveling?animationStyle3:null}
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3} 
                onClick={() => {
                  setIsTraveling(true)
                  setTimeout(() => {
                  goToSkills()
                  setIsTraveling(false)
                 }, 1500)}
                  
                }>Options </span>
                <span className ='explain three'
                style = {isHovered3 === 'a'&& !isTraveling? null:isHovered3|| isTraveling? myStyle:myOtherStyle}
                >
                my skills</span></h2>

            <h2><span className ='routeButton four'
            style = {isTraveling?animationStyle4:null} 
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4} 
                onClick={() => {
                  setIsTraveling(true)
                  setTimeout(() => {
                  goToAbout()
                  setIsTraveling(false)
                 }, 1500)}
                  
                }>Credits </span>
                <span className ='explain four' 
                style = {isHovered4 === 'a'&& !isTraveling? null:isHovered4|| isTraveling? myStyle:myOtherStyle}
                >
                my education</span></h2>
            </div>
        
        </div>
    );
};
 
export default Home;