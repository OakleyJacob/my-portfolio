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
        <figure className = 'projectFigure' >
          <img  src = {props.pic} alt ='just a pic of the site' className = 'projectPic'/>
        </figure>
        <div className = 'projectText'>
        <h3>{props.name}</h3>
        <p>{props.description}</p> 
        <a href = {props.link}  target="_blank" ><h5 > Check the app out!</h5></a>
        
        <div>  {props.skills.map((value, index) => {
          if (index === props.skills.length-1) {
            return <span>{value}</span>
          } else{
            return <span>{value + ", "}</span>
        }})}
          </div>
        
        </div>
        </div>
        </>
    );
};
 
export default Project;