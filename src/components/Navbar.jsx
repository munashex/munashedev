import React from 'react'
import myLogo from '../assets/myLogo.png' 
import {FaBars, } from 'react-icons/fa'
import {BsXLg} from 'react-icons/bs'
import { useNavigate, Link } from 'react-router-dom'


function Navbar() {  
const [isOpen, setIsOpen] = React.useState(false)  

let navigate = useNavigate() 

const closeMenu = () => {
  setIsOpen(false)
}

const navDetails = [{
  name: 'About', 
  url: '/about' 
},
{
name: 'Work', 
url: '/work' 
}, 
{
  name: 'Contact', 
  url: '/contact' 
  }, 
]


  return (
<nav className="flex items-center justify-between m-5">
 <Link to="/">
 <img src={myLogo} alt="myLogo" className="h-[80px] "/>  
 </Link>

  <ul className="sm:flex hidden">
   {navDetails.map((item) => (
    <Link key={item.name} to={`${item.url}`} className="text-white mr-10 hover:text-[#64ffda]">{item.name}</Link>
   ))}
  </ul>
  
  <ul className="sm:hidden">
<button 
onClick={() => setIsOpen(!isOpen)}
>{isOpen ? <BsXLg size={26} color="cyan"/> : <FaBars color="cyan" size={26}/>}</button>
  
  <div className={`${isOpen ? 'flex': 'hidden'} rounded-lg  absolute right-12 bg-gradient-to-r from-cyan-200 to-blue-200   p-2`}>
  {navDetails.map((item) => (
    <Link key={item.name} to={`${item.url}`} onClick={closeMenu} className="text-black mr-5 font-bold">{item.name}</Link>
   ))}
  </div>
  
  </ul> 
</nav>
  )
}

export default Navbar