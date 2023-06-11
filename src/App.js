import React, {useEffect, useState} from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Portfolio from './pages/otherwork';
import Contact from './pages/contact';
import Preloader from './components/Preloader';
import DevBy from './components/DevBy';
import VideoPlayer from './components/VideoPlayer';
import Skills from './pages/skills';
import Typewriter from './components/Typewriter';


function App() {
    const [compIndex, setComponentIndex] = useState(0)
  
    let handleChangeComponent = () => {
       let newIndex = compIndex + 1
        setTimeout(() => {
            setComponentIndex(newIndex);
           }, 500)

    }
    const components = [<Preloader done = { handleChangeComponent}/>, <DevBy done = { handleChangeComponent}/>, <Typewriter done = { handleChangeComponent}/>, <VideoPlayer />]

    return (
        <>
        <div className= 'trueBackground'>
        <div className='background'>
        {components[compIndex]}
      
    </div>
      
        <Router>
       
          
            <Routes>
            <Route path='/' element={components[compIndex]} />   
                 <Route path='/Home' element={<Home />} />   
                <Route path='/skills' element={<Skills />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
            
         </Router> 
        
         </div>

       </> 
    );
}
 
export default App;
