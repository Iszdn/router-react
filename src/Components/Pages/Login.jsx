import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const handleLogin=()=>{
        navigate("/")
    }
  return (
    <div>
        <button style={{margin:"50px"}} onClick={handleLogin}>Sign in</button>
    </div>
  )
}

export default Login