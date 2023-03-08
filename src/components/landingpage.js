import React from "react"
import Sonny from "../assets/paxel-logo.png"
import UI from "../assets/location.png"
import GRAPHIC from "../assets/user.png"
import SOFTWARE from "../assets/clipboard.png"
import APPLICATION from "../assets/subscription.png"
import ServiceComponent from "./serviceComponent"
import { Header } from "./header"
import { Footer } from "./footer"
//import { Subscription } from "./subscription"
// import { useNavigate } from "react-router-dom"
export default function Landing() {
  // const navigate = useNavigate();
  
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Header/>
      <div className="mt-44">
        <img src={Sonny} alt="sonny" className="mt-32  mx-auto w-[100px] h-[100px] "/>
        <h1 className="mt-20 text-center text-[#ffffff] text-3xl sm:text-4xl font-semibold">PAXEL</h1>
        <div className="mt-24 grid sm:grid md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-4 place-items-center">
          <div><ServiceComponent title="PROFILE" icon={GRAPHIC} route={'/Profile'}/></div>
          <div><ServiceComponent title="ADDRESS" icon={UI} route={'/Address'}/></div>
          <div><ServiceComponent title="SUMMARY" icon={SOFTWARE} /></div>
          <div><ServiceComponent title="SUBSCRIPTION" icon={APPLICATION} route={'/Subscription'}/></div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}






