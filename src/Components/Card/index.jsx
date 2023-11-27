import React, { useEffect, useState } from 'react'
import PropsCards from '../Props'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Cards = () => {
    const [data, setData] = useState([])
function fetchData() {
    fetch("https://northwind.vercel.app/api/categories").then(res=>res.json()).then(data=>setData(data))
}
useEffect(() => {
fetchData()
}, [])

  return (

    <div className='cards row'>
{
    data && data.map((x)=>
    (
        <PropsCards id={x.id}  name={x.name} description={x.description}></PropsCards>
    ))
    
}
    </div>
  )
}

export default Cards