import React, { useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'

const Details = () => {
  const [data, setData] = useState([])
  const {id}=useParams()
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/categories/"+id).then(res=>res.json()).then(data=>setData(data))
  }, [])
  
  console.log(id);
  return (

    <>
{
  data && 
    <div key={data.id}>
   <h2>{data.id}</h2>
   <h3>{data.name}</h3>
   <p>{data.description}</p>
   </div>

}
    </>
  )
}

export default Details