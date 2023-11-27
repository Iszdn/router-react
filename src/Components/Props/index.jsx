import React from 'react'
import "./indec.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const PropsCards = ({id,name,description}) => {
  
  
  return (
    <div className='card col-lg-3 col-md-4 col-6'>
        <h2>{id}</h2> 
        <h3>{name}</h3>
       <p className='text'>{description}</p>
       <Link to={`/details/`+id}>details</Link>
    </div>
  )
}

export default PropsCards