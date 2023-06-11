import React, {useEffect, useState} from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Portfolio from './pages/otherwork';
import Contact from './pages/contact';
import Preloader from './components/Preloader';

import video from "./Assets/AdobeStock_604695407.mov"
import VideoPlayer from './components/VideoPlayer';
import Skills from './pages/skills';


function App() {
    const [loaded, setLoaded] = useState(false)
  
 
    const handleKeyPress = () => {
        setTimeout(() => {
            setLoaded(true);
       
           }, 500)

    }


    return (
        <>
      
        <div className='background'>
        <VideoPlayer play = {loaded}/>
      
    </div>
      
        <Router>
            {loaded?null:<Preloader click = {handleKeyPress}/>}
          
            <Routes>
                 <Route path='/' element={<Home />} />   
                <Route path='/skills' element={<Skills />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
            
         </Router> 
        
         

       </> 
    );
}
 
export default App;
