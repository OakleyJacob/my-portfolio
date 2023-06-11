import React, { useEffect, useState } from 'react';
import video from "../Assets/AdobeStock_604695407.mov"

const VideoPlayer = (props) => {

    const myStyle = {
        opacity: 100,
        zindex: -1,
        transition: 'opacity 1.5s ease-in' 
     
      }

 

  return (
    <>
    <div className='background' style = {myStyle}>
      <video autoPlay loop muted src={video} >
      
      </video>
    </div>
    </>
  );
}

export default VideoPlayer;