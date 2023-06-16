
import React, {useState} from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../Assets/animations.css'
import { useNavigate } from "react-router-dom";
const Contact = () => {
    const [isAnimating1, setIsAnimating1] = useState(true) 
    const [isAnimating2, setIsAnimating2] = useState(true) 
    const [isAnimating3, setIsAnimating3] = useState(true) 
    const [isTraveling, setIsTraveling] = useState(false)
    
    const handleAnimationStart1 = () => {
        setIsAnimating1(true)
    }
    const handleAnimationEnd1 = () => {
        setIsAnimating1(false)
    }
    const handleAnimationStart2 = () => {
        setIsAnimating2(true)
    }
    const handleAnimationEnd2 = () => {
        setIsAnimating2(false)
    }
    const handleAnimationStart3 = () => {
        setIsAnimating3(true)
    }
    const handleAnimationEnd3 = () => {
        setIsAnimating3(false)
    }

    const myShadow = {
        boxShadow: '0 1.5rem 4rem rgba(0, 0, 0, .25)',
        height: '35rem'
     
    }

    const handleMouseLeave1 = () => {
        setIsAnimating1(true)
        mouseLeaveExtension(1)
    }
    const handleMouseLeave2 = () => {
        setIsAnimating2(true)
        mouseLeaveExtension(2)
    }
    const handleMouseLeave3 = () => {
        setIsAnimating3(true)
        mouseLeaveExtension(3)
    }
    const mouseLeaveExtension = (e) => {
        setTimeout(() => {
          switch (e){
            case 1:
                setIsAnimating1(false);
                break;
            case 2:
                setIsAnimating2(false);
                break;
            case 3:
                setIsAnimating3(false);
                break;
            default:

          }
          }, 600)
       
    }
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


      const animationStyle2 = {
        animationName : 'moveOutLeft2',
        animationDuration : '1s',
       
        opacity: 0,
        transition: 'opacity .5s ease-out', 
      }
      const animationStyle3 = {
        animationName : 'moveOutLeft2',
        animationDuration : '1s',
        
        opacity: 0,
        transition: 'opacity .5s ease-out', 
      }
      const animationStyle4 = {
        animationName : 'moveOutLeft2',
        animationDuration : '1s',
        opacity: 0,
        transition: 'opacity .5s ease-out', 
        
       
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
                 }, 800)}
                  
                }> main menu</span> 
            <div className = "contactCards">
              <div style = {isAnimating1?null:myShadow}> <div className = 'myCard' style = {isTraveling?animationStyle2:null}  onAnimationStart = {() => handleAnimationStart1()}
                 onAnimationEnd = {() => handleAnimationEnd1()} 
                 onMouseEnter = {() => handleMouseLeave1()}
                  onMouseLeave = {() => handleMouseLeave1()}>
                <div className = 'myCard__side myCard__side--front cardOne' ><div className = 'contactIcon'><GitHubIcon    viewBox={'0 0 25 25'} 
                        preserveAspectRatio= 'xMidYMid meet'
                        style={{
                            width: '100%',
                            height: '200px'
                        }}/> <p style = {{textAlign:'center'}}>Check out<br></br> my GitHub.</p></div></div>
                
                <div className = 'myCard__side myCard__side--back cardOneBack' >My github houses all my projects<br/> some front-end,<br/> some back-end, <br/>some full-stack, <br/>all educational.<br/>
               Feel free to clone anything you want!  <span className = 'cardBackButton backOne'> Show me</span> </div>
               </div> </div> 
               <div style = {isAnimating2?null:myShadow}> <div className = 'myCard' style = {isTraveling?animationStyle3:null}  onAnimationStart = {() => handleAnimationStart2()}
                 onAnimationEnd = {() => handleAnimationEnd2()} 
                 onMouseEnter = {() => handleMouseLeave2()}
                  onMouseLeave = {() => handleMouseLeave2()}>
                <div className = 'myCard__side myCard__side--front cardTwo'><div className = 'contactIcon'><LinkedInIcon   viewBox={'0 0 25 25'} 
                        preserveAspectRatio= 'xMidYMid meet'
                        style={{
                            width: '100%',
                            height: '200px'
                        }}/> <p style = {{textAlign:'center'}}>Connect on <br/> LinkedIn.</p></div></div>
                
                <div className = 'myCard__side myCard__side--back cardTwoBack'>I'm always open to new connections.<br /> If you want to see my random musings about web development, or share your own, please feel free to add me! <span className = 'cardBackButton backTwo'> Connect</span> </div></div>
               </div>
               <div style = {isAnimating3?null:myShadow}> <div className = 'myCard' style = {isTraveling?animationStyle4:null}  onAnimationStart = {() => handleAnimationStart3()}
                 onAnimationEnd = {() => handleAnimationEnd3()} 
                 onMouseEnter = {() => handleMouseLeave3()}
                 onMouseLeave = {() => handleMouseLeave3()}>
                <div className = 'myCard__side myCard__side--front cardThree'><div className = 'contactIcon'><EmailIcon  viewBox={'0 0 25 25'} 
                        preserveAspectRatio= 'xMidYMid meet'
                        style={{
                            width: '100%',
                            height: '200px'
                        }}/> <p style = {{textAlign:'center'}}>Send me<br/>  an email.</p></div></div>
                
                <div className = 'myCard__side myCard__side--back cardThreeBack'>Like the website? Send me an email. <br />  Want to collab? Send me an email.<br/>
               Have a question? Send me an email. <br />
              
                Just wanna chat? Send me an email. <span className = 'cardBackButton backThree'> Start it</span></div></div>
               </div></div>
        </div>
    );
};
 
export default Contact;