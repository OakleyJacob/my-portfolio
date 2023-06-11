import React, { useEffect, useState } from 'react';
import video from "../Assets/AdobeStock_604695407.mov"
import { Fade } from '@mui/material';

const VideoPlayer = (props) => {
  const [showVideo, setShowVideo] = useState(false);
useEffect(() => {
  setTimeout(()=>{
    setShowVideo(true);
  }, 500)
})
    const myStyle = {
        opacity:showVideo ? 1 : 0,
        zindex: -1,
        transition: 'opacity 1.5s ease-out' 
     
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