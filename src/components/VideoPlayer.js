import React, { useEffect, useState } from 'react';
import video from "../Assets/AdobeStock_604695407.mov"

const VideoPlayer = (props) => {

    const myStyle = {
        opacity: 80,
        zindex: -1,
        display: 'hidden',
        transition: 'opacity 1.5s ease-in' 
     
        /* Adjust the duration and easing as needed */
      }

      const myStyle2 = {
        opacity: 100,
        zindex: -1,
        background: '#222222',
        
        transition: 'opacity 1.5s ease-out' 
     
      }

  return (
    <>
    <div className='background' style = {props.play?myStyle: null}>
      <video autoPlay loop muted src={video} >
      
      </video>
    </div>
    </>
  );
}

export default VideoPlayer;