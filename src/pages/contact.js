
import React from 'react';
import { NavLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
const Contact = () => {
    return (
        





        <div>
            <NavLink to="/home" style={{ textDecoration: 'none' }} >
            <span className = 'backButton'> main menu</span> </NavLink>
            <div className = "contactCards">
                <div className = 'myCard'>
                <div className = 'myCard__side myCard__side--front cardOne'><div className = 'contactIcon'><GitHubIcon    viewBox={'0 0 25 25'} 
                        preserveAspectRatio= 'xMidYMid meet'
                        style={{
                            width: '100%',
                            height: '200px'
                        }}/> <p style = {{textAlign:'center'}}>Check out<br></br> my GitHub.</p></div></div>
                
                <div className = 'myCard__side myCard__side--back cardOneBack'>Back</div>
               </div>
               <div className = 'myCard'>
                <div className = 'myCard__side myCard__side--front cardTwo'><div className = 'contactIcon'><LinkedInIcon   viewBox={'0 0 25 25'} 
                        preserveAspectRatio= 'xMidYMid meet'
                        style={{
                            width: '100%',
                            height: '200px'
                        }}/> <p style = {{textAlign:'center'}}>Connect on <br></br> LinkedIn.</p></div></div>
                
                <div className = 'myCard__side myCard__side--back cardTwoBack'>Back</div>
               </div>
               <div className = 'myCard'>
                <div className = 'myCard__side myCard__side--front cardThree'><div className = 'contactIcon'><EmailIcon  viewBox={'0 0 25 25'} 
                        preserveAspectRatio= 'xMidYMid meet'
                        style={{
                            width: '100%',
                            height: '200px'
                        }}/> <p style = {{textAlign:'center'}}>Send me <br></br>  an email.</p></div></div>
                
                <div className = 'myCard__side myCard__side--back cardThreeBack'>Back</div>
               </div></div>
        </div>
    );
};
 
export default Contact;