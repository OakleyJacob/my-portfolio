
import React from 'react';
import { NavLink } from 'react-router-dom';
import java from '../Icons/java.png';
import css from '../Icons/css.png';
import html from '../Icons/html.png';
import ruby from '../Icons/ruby.png';
import rails from '../Icons/rails.png';
import react from '../Icons/react.png';
import ruby2 from '../Icons/ruby2.png';
import js from '../Icons/js.png';
import sql from '../Icons/sql.png';
const Skills = () => {



    return (
        <div>
             <NavLink to="/home" style={{ textDecoration: 'none' }} >
             <span className = 'backButton'>main menu</span>  </NavLink>
             <div className = 'iconsBody'>
             
                <div className='front-End'>
                    <h2>Front-End Tech</h2>
                    <img src = {js} className='docuIcon'/>
                    <br />
                    <img src = {react} className='docuIcon react'/>
                    <br/>
                    <img src = {css} className='docuIcon'/>            
                    <img src = {html} className='docuIcon'/>
                </div>
                <div className='back-End'>
                    <h2>Back-End Tech</h2>
                    <div>
                    <img src = {ruby} className='docuIcon back-End'/>
                    <img src = {rails} className='docuIcon back-End' /> </div><br/>
                    <img src = {java} className='docuIcon back-End'/>
                    <img src = {sql} className='docuIcon back-End'/>
                </div>
            </div>
        </div>
    );
};
 
export default Skills;