import React from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate =  useNavigate()
    
    return (

    <div>
        <h2>Home</h2>
    <button onClick={()=>navigate('/UseRef')}>USEREF</button>
    <button onClick={()=>navigate('/UserReduce')}>USEREFDUCER</button>
    <button onClick={()=>navigate('/Hoc')}>HOC</button>
    </div>
  )
}

export default Home