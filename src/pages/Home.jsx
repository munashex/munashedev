import React from 'react'
import {BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs'
import {FcMultipleSmartphones} from 'react-icons/fc'

function Home() {
  return (
    <div className="w-[90%] mx-auto  lg:w-[69%] lg:mx-[11rem] my-9">
      <h1 className="text-[#64ffda] text-lg py-1">Hi my name is</h1> 
      <h1 className="text-[#ccd6f6] md:text-4xl  text-3xl my-1 lg:text-6xl lg:tracking-[-2px] ">Munashe Mugonda.</h1>
      <h1 className="md:text-4xl  text-3xl text-slate-200 my-3 lg:text-6xl lg:tracking-[-2px]">I develop end-to-end solutions for the web</h1>
      <h1 className="text-slate-300 text-lg leading-6 lg:text-xl">In simpler terms, I am a developer who specializes 
        in creating software and technology-based solutions,
         with a particular focus on crafting outstanding user
        experiences. Occasionally, I am involved in the design process 
        as well. At present, I am concentrating on developing products 
      that are accessible and cater to the needs of the end-users. 
      </h1>
       
       <a href="https://github.com/munashex">
       <button className="mt-16  border-2 border-[#64ffda] hover:border-white p-3 rounded-lg  text-white">Check out my github</button>
       </a>

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
    </div>
  )
}

export default Home