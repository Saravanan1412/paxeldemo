import React from 'react'
import { useNavigate } from 'react-router-dom';
const ServiceComponent = (props) => {
  const navigate = useNavigate();
  return (
    <div >
        <div className='bg-white w-[280px] h-[300px] text-black text-3xl border-b-8 border-[#ffb003] m-2'>
          <div className='pt-16'>
            <img src={props.icon} alt="icon" className=' ml-10 w-[100px] h-[100px] '/>
          </div>
          <p className='ml-10 mt-8'>{props.title}</p>
          <button className='ml-10 mt-4 text-xl text-white bg-[#00203f] w-20 rounded-xl' onClick={()=>{navigate(props.route)}}>MORE</button>
        </div>
    </div>
  )
}

export default ServiceComponent;