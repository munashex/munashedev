import React from 'react'
import madhuna from './madhuna.jpg'
import './about.css';
import Skills from './skills';
import { useNavigate } from "react-router-dom";




function About() {

    let navigate = useNavigate();
    function handleClick() {
      navigate("/contact");
    }
   

    return (
        <div className='about'>
            <img
            src={madhuna}
            className="madhuna"
            />

            <div style={{
                marginTop: 18
            }}>
            <h4 className="intro" style={{
                marginLeft: 120,
                color: 'white',
                fontFamily: 'cursive'
            }}>hello, my name is
            </h4>
            <h5 className="myname"
            style={{
                marginLeft: 90,
                 color: 'cyan',
                 fontFamily: 'cursive'
            }}>MUNASHE MADHUNA</h5>
            </div>
            
            <h6 className='info text-white'>
            I'm a full-stack developer specialised in frontend and backend 
            development for complex scalable web apps. I write about web development 
            on my blog and regularly speak at various web conferences and meetups.
             Want to know how I may help your project? Check out my project case 
             studies and resume. 
            </h6>
            <button  onClick={handleClick} className="btn btn hireme">Hire Me</button>
            <Skills/>
        </div>
    )
}

export default About;
