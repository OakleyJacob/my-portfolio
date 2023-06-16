import React from "react";
import '../Assets/animations.css'

const Project= (props) => {
    const animationStyleBackButton1 = {
        animationName : 'moveOutBottom',
        animationDuration : '1.5s',
    
        transition: 'opacity .5s ease-in', 
      }
      const animationStyleBackButton2 = {
        animation: 'moveInBottom 1.5s .2s',
        animationTimingFunction: 'ease-in',
        animationFillMode: 'backwards'
      }

    return (
        <>
        <div className = 'project' style = {props.travel?animationStyleBackButton1:animationStyleBackButton2}>
        <figure className = 'projectFigure'>

        </figure>
        <div className = 'projectText'>
        <h3>Lorem ipsum</h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu justo ac lacus egestas auctor.</p> 
        <h5> Lorem Link</h5>
        </div>
        </div>
        </>
    );
};
 
export default Project;