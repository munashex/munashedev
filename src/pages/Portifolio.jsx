import React from 'react'
import next from '../assets/next.png' 
import mongo from '../assets/mongo.png' 
import node from '../assets/node.png' 
import  firebase from '../assets/firebase.png'
import react from '../assets/react.png'
import { BsGithub } from 'react-icons/bs' 
import {FiExternalLink} from 'react-icons/fi'

function Portifolio() {
  const serverImage = [ 
    {
      image: mongo, 
      name: 'mongo clone'
    },
    {
     image: firebase
    },
    {
        image: next
    }, 
    {
        image: node
    }, 
    {
        image: react
    }
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

            <h1 className="text-slate-200 md:text-xl text-lg">mongo clone</h1>

             <details className="my-2"> 
              <summary className="text-black text-lg font-semibold cursor-pinter">details</summary> 
              <p className="text-black">hey testing hsbdusbs  jbsuabush  hhb hhsbdy shdbysubsbdhhsbdu</p>
             </details>

            </div>
             <div className="flex flex-col my-2"> 
             <span className="cursor-pointer"><BsGithub color="white" size={20}/></span> 
              <span className="cursor-pointer my-2"><FiExternalLink color="white" size={20}/></span>
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