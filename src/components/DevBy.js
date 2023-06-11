import React, { useState, useEffect } from 'react'
import Typed from 'react-typed'

const DevBy = (props) => {
    const [loaded2, setLoaded2] = useState(false)
    useEffect(()=> {
      console.log("one");
      setTimeout(() => {
        setLoaded2(true)
        triggerDone()
      }, 4000)
    }, [])
    const triggerDone = () => {
      console.log(loaded2);
      setTimeout(() => {
        console.log('done');
       props.done() 
      }, 1000)
    }  
    const myStyle = {
        opacity: 0,
        zindex: -1,
        display: 'hidden',
        transition: 'opacity 1s ease-out' 
     

      }
   
  return (

   <div style = {loaded2?myStyle:null} id = "preloader2">
   <h1 ><span className = "devBy">developed_by: </span><span className = "devByName">'Jacob Oakley'<span style = {{color:'#C3C3C3', fontWeight: '100'}}>;</span></span></h1>
</div>
  )
}

export default DevBy