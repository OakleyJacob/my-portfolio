
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
const About = () => {
    const [isTraveling, setIsTraveling] = useState(false)
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
      const animationStyleShrink= {
        animationName : 'shrink',
        animationDuration : '2s',
        overflow: 'auto',
        transition: 'opacity .5s ease-out'
      }

      const navigate = useNavigate()
      const goToHome = () => {
        setTimeout(() => {
            navigate('/home')
            setIsTraveling(false)
        }, 2000)}
    return (
        <div>
                        
               
                        <span className = 'backButton'  
            style = {isTraveling?animationStyleBackButton1:animationStyleBackButton2}
             onClick={() => {
                  setIsTraveling(true)
                  
                  goToHome()
                
               }
                  
                }> main menu</span> 
            <div className = 'pagesBody' style= {!isTraveling?{overflow: 'auto'}:animationStyleShrink}>
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