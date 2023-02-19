import React from 'react'
import {BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs'
import {FcMultipleSmartphones} from 'react-icons/fc'
import TechCarousel from '../components/TechCarousel' 


function About() { 
  return (
    <div className='w-[80%] mx-auto'>
      <h1 className="text-slate-100 my-6 text-xl border-1 lg:text-3xl">About Me</h1>
    <h1 className="text-slate-400 my-4 text-lg leading-[23px] lg:text-xl">
    Hi! I'm Munashe and I'm passionate about 
    making digital projects. My journey in web development
     began in 2019 when I modified themes for the platform Tumblr. Making 
    a custom reblog button was a great way to learn HTML and CSS.
    </h1> 

    <h1 className="text-slate-400 my-4 text-lg leading-[23px]  lg:text-xl">
    As a fullstack developer, 
    I have been fortunate to have been 
    able to work on a variety of freelance and
     personal projects over the past two years. My priority going forward is to create products and digital experiences that are user-friendly and accessible to everyone, regardless of their ability or disability. I strive to ensure that my clients have a positive user experience and that 
    the products I create are inclusive
     and accessible to all.
    </h1>

    <h1 className="text-slate-400 text-lg lg:text-xl my-6">
    Here are a few technologies I’ve been working with recently:
    </h1>

    <div className="group/item fixed left-12 bottom-[10rem]
        lg:flex items-center flex-col space-y-4 hidden xl:flex 2xl:flex 3xl:flex 4xl:flex
        ">
         <a className="text-slate-100 cursor-pointer hover:text-[#64ffda]">
          <BsGithub size={20}/> 
          <span className="absolute left-7 top-[30px] space-x-3 invisible text-black  bg-[#64ff] border-2 p-1 border-[#64ffda] rounded-lg font-base group-hover/item:visible">
             <FcMultipleSmartphones size={26}/></span>
         
         </a>
        <a className="text-slate-100 cursor-pointer hover:text-[#64ffda]">
          <BsInstagram size={20}/>
        </a>
        <a className="text-slate-100 cursor-pointer hover:text-[#64ffda]">
          <BsTwitter size={20}/>
        </a>
       </div> 
      <TechCarousel/>
    </div>
  )
}

export default About