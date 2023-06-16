import React, {useEffect, useState} from 'react';
import './App.css';
import { useNavigate } from "react-router-dom";
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
import Blank from './components/Blank'
import './pages.css'

function App() {
    const [compIndex, setComponentIndex] = useState(3)
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const navigation = useNavigate()
    let handleChangeComponent = () => {
        let newIndex = compIndex + 1
        setTimeout(() => {
            setComponentIndex(newIndex);
        }, 500)

    }
    
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []); 
    useEffect(() => {
        if (compIndex===3) {
           
            navigation('/Home')
        }
      }, [compIndex]);
    const components = [<Preloader done = { handleChangeComponent}/>, <DevBy done = { handleChangeComponent}/>, <Typewriter done = { handleChangeComponent}/>, <VideoPlayer />]

    return (
        <>
            <div className= 'trueBackground'></div>
                
                {components[compIndex]}
            
                    <Routes>
                        <Route path='/' element={<Blank />} />   
                        <Route path='/Home' element={<Home />} />   
                        <Route path='/skills' element={<Skills />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/portfolio' element={<Portfolio />} />
                    </Routes>
                    <div id = 'footer'>&copy; Jacob Oakley {currentYear}  </div>
                

       </> 
    );
}
 
export default App;
