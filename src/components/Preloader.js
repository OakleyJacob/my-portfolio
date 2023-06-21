import React, { useState, useEffect } from 'react'
import ReactLoading from 'react-loading'


const Preloader = (props) => {
    const [preloaded, setPreLoaded] = useState(false)
    useEffect(() => {
        setTimeout(() => {
          setPreLoaded(true);
        
          
         }, 3000)
        }, []);
        useEffect(() => {
         
          setTimeout(() => {
            props.done()
          }, 2000)
          
        }, [preloaded ===true])

       const myStyle = {
            opacity: 0,
            zindex: -1,
            display: 'hidden',
            backgroundcolor: 'transparent',
            transition: 'opacity .5s ease-out' 
          }
  
  return (
    <>
    <div id = "preloader" backgroundcolor= 'transparent' style = {preloaded?myStyle:null}>
     
    <ReactLoading  type={"cylon"} color={"#34b4eb"} height={'10%'} width={'15%'} />
   </div>
    
    

    
    </>
  )
}

export default Preloader