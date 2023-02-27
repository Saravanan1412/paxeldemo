import React from 'react'
import { Header } from './header';
import { Footer } from './footer';
export const Address = () => {
    const options = [
        {
          label: "Select country",
          value: "default",
        },
        {
          value: "1",
          label: "India",
        },
        {
          value: "2",
          label: "Indonasia",
        },
        {
          value: "2",
          label: "United States",
        },
        {
          value: "3",
          label: "Brazil",
        },
        {
          value: "4",
          label: "Canada",
        },
        {
          value: "5",
          label: "China",
        },
        {
          value: "6",
          label: "Nigeria",
        },
        {
          value: "7",
          label: "Korea",
        },
      ];
    
      return (
        <div className='flex flex-col min-h-[100vh]'>
            <Header/>
        <div className="flex flex-col text-white text-2xl  items-center mt-40">
            <h1 className='text-3xl'>ENTER ADDRESS TO BE ADDED</h1>
          <form className='w-4/12 space-y-10 mt-20 leading-10'>
            <div className="flex flex-col pb-3">
              <label className="font-bold pb-1">Full Name:</label>
              <input className="text-black p-3 border h-10" type="textbox" placeholder="Enter your full name"/>
            </div>
            <div className="flex flex-col pb-3">
              <label className="font-bold pb-1">Address Line1:</label>
              <input className="text-black p-3 border h-10" type={Text} placeholder="Door no., street name, locality"/>
            </div>
            <div className="flex flex-col pb-3">
              <label className="font-bold pb-1">Address Line2:</label>
              <input className="text-black p-3 border h-10" type={Text} placeholder="Appartment, suite, unit, building, floor, etc"/>
            </div>
            <div className="flex flex-col pb-3">
              <label className="font-bold pb-1">City</label>
              <input className="text-black p-3 border h-10" type={Text} placeholder="Enter City"/>
            </div>
            <div className="flex flex-col pb-3">
              <label className="font-bold pb-1">State/Province/Region</label>
              <input className="text-black p-3 border h-10" type={Text} placeholder="Enter State/ Region"/>
            </div>
            <div className="flex flex-col pb-3">
              <label className="font-bold pb-1">ZIP:</label>
              <input className="text-black p-3 border h-10" type={Number} placeholder="Enter ZIP Code"/>
            </div>
            <div className="flex flex-col pb-3">
              <label className="font-bold pb-1">Country:</label>
              <div>
              <select className="p-2 text-2xl  w-full text-black focus:outline-none border border-r-3 border-t-3 border-l-3 space-y-[5px]">
                               {options.map((option) => (
                                 <option value={option.value} className="bg-white" >{option.label}</option>
                               ))}
              </select>      
              </div>
            </div>
            <div className="flex flex-col pb-3">
              <label className="font-bold pb-1">Phone number:</label>
              <input className="text-black p-3 border h-10" type={Number} placeholder="Enter the phone number"/>
            </div>
          </form>
          <button className='bg-[#ADEFD1] text-black w-52 h-[60px] text-3xl mt-10' onClick={()=>{window.alert("Address Added")}}>Add Address</button>
        </div><Footer/></div>
        
      )
}
