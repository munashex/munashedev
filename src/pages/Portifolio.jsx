import React from 'react'
import next from '../assets/next.png' 
import mongo from '../assets/mongo.png' 
import node from '../assets/node.png' 
import  firebase from '../assets/firebase.png' 
import hootbank from '../assets/hootbank.png' 
import musicfinder from '../assets/musicfinder.png' 
import mykitchen from '../assets/mykitchen.png' 
import youtube from '../assets/youtube.png'
import react from '../assets/react.png'
import { BsGithub } from 'react-icons/bs' 
import {FiExternalLink} from 'react-icons/fi'

function Portifolio() {
  const serverImage = [ 
    {
      image: youtube, 
      name: 'youtube clone', 
      github: "https://github.com/munashex/Youtubeclone", 
      live: "https://classy-bombolone-7e2983.netlify.app/",
      details: "I created a replica of YouTube using the YouTube v3 API."
    },
    {
     image: musicfinder, 
     name: 'music finder', 
     github: "https://github.com/munashex/Music-finder-", 
     live: "https://mellifluous-swan-873cc7.netlify.app",
     details: "I developed a music discovery tool that allows you to search for any song and displays it on your screen."
    },
    {
        image: mykitchen, 
        name: "all Recipes", 
        github: "https://github.com/munashex/Food-Recipe-WebApp", 
        live: "https://effervescent-cajeta-e48d04.netlify.app",
        details: "I created a recipe search engine that enables you to look up any recipe and presents it on your display"
    }, 
    {
      image: hootbank, 
      name: "hoo bank website", 
      github: "https://github.com/munashex/hoobank", 
      live: "https://cute-bavarois-b03747.netlify.app",
      details: "I developed Hoobank to be responsive and compatible with a wide range of devices, including media laptops and other electronic devices."
    }, 
   
]
  return (
    <div className="m-9">
      <h1 className="text-slate-200 font-semibold text-xl lg:text-2xl text-center">Some Things I’ve Built</h1>
       <div className="flex flex-wrap justify-center  md:gap-x-5 gap-0">
        {serverImage.map((item) => {
          return (
           <div> 
             <div key={item.image} className="bg-sky-900  hover:bg-sky-700 my-6 w-[100%]   md:w-[300px]  sm:w-[80%]">
              <img src={item.image} alt="projects" className="md:w-[300px] md:h-[240px] w-[100vw] h-[300px]"></img>
             <div className="flex justify-between  m-2">
            <div>

            <h1 className="text-slate-200 md:text-xl text-lg">{item.name}</h1>

             <details className="my-2"> 
              <summary className="text-black text-lg font-semibold cursor-pinter">details</summary> 
              <p className="text-black">{item.details}</p>
             </details>

            </div>
             <div className="flex flex-col my-2"> 
             <a className="cursor-pointer" href={item.github}><BsGithub color="white" size={20}/></a> 
              <a className="cursor-pointer my-2" href={item.live}><FiExternalLink color="white" size={20}/></a>
             </div>
             </div>

            </div>
           </div>
          )
        })}
       </div>
    </div>
  )
}

export default Portifolio