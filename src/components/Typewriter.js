import React, { useState, useEffect } from 'react'

import Typed from 'react-typed'

const Typewriter = (props) => {
    const [loaded2, setLoaded2] = useState(false)

    const handleKeyPressDownStream = () => {
        setLoaded2(true)
        
        window.removeEventListener('keydown', handleKeyPressDownStream);
        window.removeEventListener('click', handleKeyPressDownStream);
        handleDone()
      };
      const handleDone = () => {
        setTimeout(() => {
            props.done()
           
        }, 1000)
      }

      const myStyle = {
        opacity: 0,
        zindex: -1,
        display: 'hidden',
        transition: 'opacity 1.5s ease-out' 
     
        /* Adjust the duration and easing as needed */
      }
    useEffect(() => { 
        window.addEventListener('keydown', handleKeyPressDownStream);
        window.addEventListener('click', handleKeyPressDownStream);

      }, []);
  return (

   <div style = {loaded2?myStyle:null} id = "preloader2">
    <Typed strings = {["Press any button to begin."]}
     typeSpeed={75}
     fadeOut = {true}
     fadeOutClass= 'typed-fade-out'
     fadeOutDelay= {700}
     loop = {false}
    /></div>
  )
}

export default Typewriter