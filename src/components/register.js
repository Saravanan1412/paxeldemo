import React from 'react';
import {useNavigate } from 'react-router-dom';
function Register() {
  const navigate = useNavigate();
  const tohome=()=>{navigate('/DashBoard')};
  const options = [
    {
      value: "1",
      label: "Retailer",
    },
    {
      value: "2",
      label: "Distributor",
    },
    {
      value: "2",
      label: "Manufacturer",
    },
   
  ];
  
  return (
    <div className="bg-[#00203F] flex flex-col h-screen items-center justify-center">
    <div className="flex flex-col h-[600px] w-[360px] items-center justify-center bg-white bg-opacity-10 rounded-3xl shadow-5xl border-r-0 border-b-0 border-opacity-30">
          <div className="flex flex-col items-center justify-center m-6 ">
              <div className=" p-1 rounded-full m-5">
                    <div className="rounded-full m-1">
                      <img className="h-[5.5rem] w-[5.5rem] rounded-full bg-blue-500" src={require('../assets/circle.png')} alt="user"/>
                    </div> 
              </div>
              <div>
                <p className="text-xl text-white"> Business Account</p>
              </div>
          </div>
          <div className="flex flex-col space-y-[25px]">
                <input type="text" placeholder="Enter your name" className="p-1.5 text-[15px] w-64 text-sm text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0"/>
                <input type="text" placeholder="Company name" className="p-1.5 text-[15px] w-64 text-sm text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0"/>
                <div>
                    <select className="p-1.5 text-[15px] w-64 text-sm text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 space-y-[5px]">
                           {options.map((option) => (
                             <option value={option.value} className="bg-[#00203F]">{option.label}</option>
                           ))}
                           
                   </select>
                </div>
                <input type="text" placeholder="Website" className="p-1.5 text-[15px] w-64 text-sm text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0"/>
                <input type="password" placeholder="Password" className="p-1.5 text-[15px] w-64 text-sm text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0"/>
          </div>
          <div className="flex flex-row m-8 space-x-[5px]">
                  <input type="checkbox" className="rounded-full"/>
                  <p className="text-white text-[13px]">Agree with</p>
                  <button className="text-[#ADEFD1FF] text-[13px]">Terms&Conditions</button>              
          </div>
          <div className="mb-10">
              <button className="text-[#00203F] font-bold  h-8 w-40 text-sm cursor-pointer font-poppins rounded-xl px-5 py-1 bg-white bg-opacity-50 hover:bg-[#ADEFD1] hover:bg-opacity-80" onClick={tohome}>
                    Create Account
              </button>
          </div>
    </div>
    </div>
  );
}
export default Register;
