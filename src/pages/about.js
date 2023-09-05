
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
            }}>
              main menu
            </span> 
             <div className = 'pagesBody' style= {!isTraveling?{overflow: 'auto'}:animationStyleShrink}>
              <a href = "https://github.com/OakleyJacob/my-resume/blob/main/Resume.pdf" target = "_blank" style = {{display:'block', margin:'auto', textAlign:'center' }}> Grab my resume here! </a>
              <p>
                In the vast and ever-evolving landscape of technology, I find myself both humbled and invigorated by the wealth of knowledge before me. As a relative newcomer to the tech industry, my journey has been a whirlwind, but it's one I've wholeheartedly embraced because I've discovered a true passion.              </p>
              <br/>
              <p>
                Since my youth, I've been an ardent seeker of knowledge, and now as an adult, I'm committed to the art of continuous discovery. My daily mantra revolves around improvement, both on a personal and professional level. The idea that I can wake up each day and learn something entirely new excites and propels me forward, drawing me deeper into the realm of technology.
              </p>
              <br/>
              <p>
                What truly entices me about this industry is its dynamic nature. Here, progress is not the exception; it's the norm. Innovative solutions are perpetually sought after, and I relish this constant pursuit. I eagerly accept the challenge of staying current, constantly evolving my skills, and actively seeking better ways to solve problems and achieve goals.
              </p>
              <br/>
              <p>
                As a recent bootcamp graduate, I'm filled with anticipation. I'm eager to contribute the skills I've honed and the enthusiasm I've cultivated to a team that shares my insatiable thirst for progress. The prospect of collaborating with industry experts, absorbing their knowledge, and making a meaningful impact in the tech world is the next thrilling chapter in my journey.
              </p>
              <br/>
              <p>
                Together, let's navigate the ever-shifting tides of technology and forge a path of innovation and continuous growth.
              </p>
           </div>
        </div>
    );
};
 
export default About;