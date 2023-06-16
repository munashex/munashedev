import { Link, useNavigate } from "react-router-dom"

const NotFound = () => { 
 let navigate = useNavigate()   
    setTimeout(() => {
    navigate('/')
    }, 5000)

    return (
        <div className="mt-3">
         <h1 className="text-3xl text-white text-center">Sorry we couldn't find that Page </h1> 
        </div>
    )
} 

export default NotFound 