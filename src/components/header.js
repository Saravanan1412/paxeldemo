import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logout from "../assets/logout.png"
import Language from "../assets/translate.png"
import Paxelhome from '../assets/paxel.png'
export const Header = () => {
    const navigate = useNavigate();
    const logout = () =>{navigate('/')}
    const home=()=>{navigate('/DashBoard')}
  return (
    <div className=' bg-white flex justify-between text-2xl p-5 fixed w-[100%] top-0'>
        <button onClick={home}><img src={Paxelhome} alt="homelogo"/></button>
        <div className='space-x-16'>
            <button>
            <img src={Language} alt="language" className='w-[50px] '/>
            </button>
            <button onClick={logout}>
                <img src={Logout} alt="logout" className='w-[50px] rounded-full'/>
            </button>
        </div>
    </div>
  )
}
