import React, { useState, useEffect } from 'react'
import ReactLoading from 'react-loading'
import Typewriter from './Typewriter'

const Preloader = (props) => {
    const [preloaded, setPreLoaded] = useState(false)
    useEffect(() => {
        setTimeout(() => {
          setPreLoaded(true);
         }, 1500)
        });

       const myStyle = {
            opacity: 0,
            zindex: -1,
            display: 'hidden',
            transition: 'opacity .5s ease-out' 
          }
  
  return (
    <>
    <div id = "preloader" style = {preloaded?  myStyle:null}>
    <ReactLoading  type={"bars"} color={"#34b4eb"} height={'20%'} width={'20%'} />
   
    </div> 
    
    {preloaded?<Typewriter click ={props.click}/>:null}
    
    </>
  )
}

export default Preloader