import React from 'react'
import './skills.css'
import { BsCheckLg } from "react-icons/bs";
import fronted from './fronted.png';
import backend from './backend.png';
import tools from './tools.png';
import smashing from './smashing.png';
import csstrick from './csstricks.png';
import sitepoint from './sitepoint.png';
import calldrop from './colldrop.png';
import madhuna from './madhuna.jpg'
import { useNavigate } from "react-router-dom";


function Skills() {

    let navigate = useNavigate();
    function handleClick() {
      navigate("/contact");
    }
    

    return (
        <div style={{
            backgroundColor: 'white'
        }}>
            <h3 className='overview'>Skills Overview</h3>
            <h6 style={{marginLeft: 14.5,fontFamily: 'monospace'}} className='experience'>
            I have more than 2 years' experience building rich web applications for clients all over the world. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience? Check out my online resume
            </h6>


            <div className='shadow shadow-lg  frontend'>
            <img  src={fronted} style={{
                height: 80,
                }} className='imgLogo'/>
        <h3 className='centerText'>Fronted</h3>
        <h5 className='frameworks'>
            <small><BsCheckLg color='skyblue'/> React/Redux</small>
            <p></p>
            <small><BsCheckLg color='skyblue'/> JavaScript</small>
            <p></p>
            <small><BsCheckLg color='skyblue'/> Node.js</small>
            <p></p>
            <small><BsCheckLg color='skyblue'/> Webpack/Gulp/Grunt</small>
            <p></p>
            <small><BsCheckLg color='skyblue'/> HTML/CSS/SASS/LESS</small>
        </h5>
            </div>



            <div className='border-lg shadow shadow-lg backend'>
            <img  src={backend} style={{
                height: 80,
                }} className='imgLogo'/>
                <h4 className='centerText'>Backend</h4>
                <h5 className='frameworks'>
            <small><BsCheckLg color='skyblue'/> Python/Django</small>
            <p></p>
            <small><BsCheckLg color='skyblue'/> Ruby/Rails</small>
            <p></p>
            <small><BsCheckLg color='skyblue'/> PHP</small>
            <p></p>
            <small><BsCheckLg color='skyblue'/> PostgresSQL/MySQL</small>
            <p></p>
            <small><BsCheckLg color='skyblue'/> MongoDB</small>
        </h5>
            </div>



            <div className='border-lg shadow shadow-lg database'>
            <img  src={tools} alt='logo' style={{
                height: 80,
                }} className='imgLogo'/>
                <h4 className='centerText'>Others</h4>
                   <h5 className='frameworks'>
            <small><BsCheckLg color='skyblue'/> DevOps</small>
            <p></p>
            <small><BsCheckLg color='skyblue'/> Unit Testing</small>
            <p></p>
            <small><BsCheckLg color='skyblue'/> UX/Wireframing</small>
            <p></p>
            <small><BsCheckLg color='skyblue'/> Sketch/Balsamiq</small>
            <p></p>
            <small><BsCheckLg color='skyblue'/> Wordpress/Shopify</small>
        </h5>
            </div>

            <div className='container-fluid shadow-shadow-lg  featured'>
               <h2 className='FIN'>Featured in</h2>
               <img src={smashing} alt="smashing" style={{height: 40, marginTop: 20}} className="smashing"/>
               <img src={csstrick} alt="csstrick" style={{height: 18, marginLeft: 25, marginTop: 23}} className='csstrick'/>
               <img src={calldrop} alt="smashing" style={{height: 50, marginTop: 50}} className='calldrop'/>
               <img src={sitepoint} alt="smashing" style={{height: 34,  marginLeft: 170, marginTop: -68}} className="sitepoint"/>
            </div>
            <div className='contactInfo'>
<img src={madhuna}  style={{height: 100, borderRadius: 30, marginLeft: 130, marginTop: 50}} className='minipic'/>

<h3 style={{textAlign: 'center', marginTop: 17}}>Interested in hiring me for your project?</h3>
<h5 style={{marginLeft: 18, marginRight: 12}} className='mini-exp'> 
    <h6>
    Looking for an experienced full-stack developer to build your  
     web app or ship your software product? To start an initial chat
      just drop me an email <h6 className='nested'>at   
        <a   href="mailto:munashemugondaa@gmail.com" style={{textDecoration: 'none', marginLeft: 5, color: 'green'}}>munashemugondaa@gmail.com</a> or use 
        the form on the contact page. </h6>
    </h6>
</h5>
<button onClick={handleClick} style={{marginLeft: 130, marginTop: 30}} className='letstalk btn btn-info' >Let's Talk</button>
             </div>
        </div>
    )
}

export default Skills;
