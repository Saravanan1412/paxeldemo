import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import Profilelogo from "../assets/paxel-logo.png"

export const Profile = () => {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <Header/>
        <div  className='text-white flex flex-col items-center  mt-44 text-center'>
          <h1 className='text-4xl'>Profile</h1>
          <img src={Profilelogo} alt="profile" className='w-[100px] mt-16'/>
          <div className='flex flex-col justify-center mt-10 w-[600px] h-[350px] text-3xl leading-loose bg-[#5e50a1] rounded-3xl'>
            <h1>SARAVANAN</h1>
            <h1>PAXEL TECHNOLABS</h1>
            <h1>DISTRIBUTOR</h1>
            <a href="https://paxel.co/en/home" className='text-[#ffb003]'>paxel.co</a>
          </div>
        </div>
      <Footer/>
    </div>
  )
}
