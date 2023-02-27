
import React from 'react';
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
 const navigate =useNavigate();
 const navitodash=()=>{navigate('/DashBoard')};
 const navitoforgot=()=>{navigate('/ForgotPassword')};
 const navitoregister=()=>{navigate('/Register')};
  return (
    <div className="bg-[#00203F] flex flex-col h-screen items-center justify-center">
      <div className="h-[450px] w-[330px] bg-white bg-opacity-10 rounded-2xl shadow-5xl border-r-0 border-b-0 border-opacity-30">
          <div className="flex flex-col items-center justify-center m-10">
              <div className="bg-[#808080] p-1 rounded-full">
                    <div className="rounded-full ">
                      <img className="h-[5rem] w-[5rem] rounded-full bg-blue-500" src={require('../assets/userimg.png')} alt="user"/>
                    </div> 
              </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-[30px]">
            <div>
                <form className="flex flex-col items-center justify evenly space-y-[25px] m-5">
                      <input type="text" placeholder="Email ID" className="w-[230px] text-sm text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0"/>
                      <input type="password" placeholder="Password" className="w-[230px]  text-sm text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0"/>
                </form>
            </div>
             <div className="flex flex-row space-x-[45px] ">
                  
                      <div className="flex flex-row space-x-[3px]">
                          <input type="checkbox"/>
                          <p className="text-[#808080] text-sm">Remember me</p>
                      </div>
                      <button className=" text-sm text-[#ADEFD1]" onClick={navitoforgot}>Forgot password?</button>
             </div>
              <button className="text-[#00203F] font-bold  h-8 w-52 text-sm cursor-pointer  font-poppins rounded-xl px-5 py-1 bg-white bg-opacity-50 hover:bg-[#ADEFD1]" onClick={navitodash}>
                      LOGIN
              </button>
              <div className='flex flex-row space-x-[10px]'>
                  <p className='text-[#808080] text-sm'>Dont have an account?</p>
                  <button className=' text-sm text-[#ADEFD1]' onClick={navitoregister}>Click here</button>
              </div>
          </div>
      </div>
          
    </div>
  );
}
export default Login;
