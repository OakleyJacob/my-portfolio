
import React, { useEffect, useState } from 'react';
import {  useNavigate }  from 'react-router-dom';
import { flushSync } from 'react-dom'; 
import java from '../Icons/java.png';
import css from '../Icons/css.png';
import html from '../Icons/html.png';
import ruby from '../Icons/ruby.png';
import rails from '../Icons/rails.png';
import react from '../Icons/react.png';
import js from '../Icons/js.png';
import sql from '../Icons/sql.png';
import '../icons.css'
import '../Assets/animations.css'
const Skills = () => {
    const [isTravelingBack, setIsTravelingBack] = useState(false)
    const [reactEnter, setReactEnter] = useState(false)
    const [wiggle, setWiggle] = useState(false)
    const mySpinStyle = {
        animationName: 'spin',
        animationDuration: '4s',
        animationIterationCount: 'infinite'
    }
    const myLoadStyle = {
        animationName: 'spinInLeft',
        animationDuration: '3s',
        animationIterationCount: 1
    }

    const myExitStyle = {
        animationName: 'spinOutLeft',
        animationDuration: '2s',
        animationIterationCount: 1
    }

        
    useEffect(() => {
        setTimeout(() => {
            setReactEnter(true)
        }, 5000)  
    }  , []);

  
        const navigate = useNavigate()
        const goToHome = () => {
            setTimeout(() => {
                navigate('/home')
         
            }, 2000)}
    
      const animationStyleBackButton1 = {
        animationName : 'moveOutTop',
        animationDuration : '2s',
    
        transition: 'opacity .5s ease-out', 
      }
      const animationStyleBackButton2 = {
        animation: 'moveInTop .8s 1s',
        animationTimingFunction: 'ease-in',
        animationFillMode: 'backwards'
      }
      const animationStyle3 = {
        animationName : 'moveOutLeft2',
        animationDuration : '1.5s',
    
        animationDelay: '.5s',
        opacity: 0,
        transition: 'opacity .5s ease-out', 
      }
      const animationStyle4 = {
        animationName : 'moveOutLeft2',
        animationDuration : '1.5s',
        animationDelay: '.2s',
        opacity: 0,
        transition: 'opacity .5s ease-out', 
      }
      const animationStyle5 = {
        animationName : 'fadeOut',
        animationDuration : '1s',
        opacity: 0,
        
        transition: 'opacity .5s ease-out', 
      }
      const animationStyle6 = {
        animationName : 'moveOutRight2',
        animationDuration : '1.5s',
    
        animationDelay: '.5s',
        opacity: 0,
        transition: 'opacity .5s ease-out', 
      }
      const animationStyle7 = {
        animationName : 'moveOutRight2',
        animationDuration : '1.5s',
        animationDelay: '.2s',
        opacity: 0,
        transition: 'opacity .5s ease-out', 
      }
     

    return (
        <div>
            <span className = 'backButton'  
                style = {isTravelingBack?animationStyleBackButton1:animationStyleBackButton2}
                 onClick={() => {
                    setIsTravelingBack(true)
                        goToHome()
                       flushSync( setWiggle(false))
               
                 
            
                }}> main menu</span> 
             <div className = 'iconsBody'>
             
                <div className='front-End'>
                    <h2 style = {isTravelingBack?animationStyle5:null}>Front-End</h2>
                    <img src = {js} style = {isTravelingBack?animationStyle4:null} alt = 'Javascript'  className='docuIcon js'/>
                    <br />
                    <img src = {react} style = {!reactEnter?myLoadStyle:isTravelingBack?myExitStyle:mySpinStyle} className='docuIcon react'  alt = 'React'/>
                    <br/>
                    <img src = {css} style = {isTravelingBack?animationStyle4:null} className='docuIcon'  alt = 'CSS'/>            
                    <img src = {html} style = {isTravelingBack?animationStyle3:null}  className='docuIcon' alt = 'HTML'/>
                </div>
                <div className='back-End'>
                    <h2 style = {isTravelingBack?animationStyle5:null}>Back-End </h2>
                    <div>
                    <img src = {ruby}  style = {isTravelingBack?animationStyle6:null} className='docuIcon back-End' alt = 'Ruby'/>
                    <img src = {rails}  style = {isTravelingBack?animationStyle7:null} className='docuIcon back-End' alt = 'Rails'/> </div><br/>
                    <img src = {java}   style = {isTravelingBack?animationStyle6:null}className='docuIcon back-End' alt = 'Java'/>
                    <img src = {sql}  style = {isTravelingBack?animationStyle7:null} className='docuIcon back-End' alt = 'Rails'/>
                </div>
            </div>
        </div>
    );
};
 
export default Skills;