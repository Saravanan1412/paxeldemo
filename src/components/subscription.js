import React from 'react'
import { Header } from './header'
import { Footer } from './footer'

export const Subscription = () => {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <Header/>
      <h1 className='mt-48 text-white text-4xl text-center'>Subscription Plans</h1>
        <div  className='text-white mt-24 lg:flex :flex-col justify-around px-20'>
          <div className='w-[400px] h-[550px] flex flex-col items-center'>
            <h1 className='w-[50%] h-[10%] text-4xl rounded-t-2xl bg-pink-600 text-center flex flex-col justify-center'>Basic</h1>
            <div className='bg-white w-full h-full flex flex-col text-black items-center rounded-3xl text-center gap-10 hover:border-8 hover:border-pink-600'>
              <h1 className='text-3xl mt-10'>$ 99<br/>monthly</h1>
              <p className='text-2xl text-justify px-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className='text-2xl text-justify px-10'>✅ Lorem ipsum dolor</p>
              <p className='text-2xl text-justify px-10'>✅ Lorem ipsum dolor</p>
            </div>
          <button className='w-6/12 h-[15%] mt-[-36px] text-3xl rounded-3xl bg-pink-600 text-center '>BUY NOW</button>
          </div>
          <div className='w-[400px] h-[600px] flex flex-col items-center'>
            <h1 className='w-[50%] h-[10%] text-4xl rounded-t-2xl bg-indigo-700 text-center flex flex-col justify-center'>Pro</h1>
            <div className='bg-white w-full h-full flex flex-col text-black items-center rounded-3xl text-center gap-10 hover:border-8 hover:border-indigo-700'>
              <h1 className='text-3xl mt-10'>$ 129.99<br/>monthly</h1>
              <p className='text-2xl text-justify px-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className='text-2xl text-justify px-10'>✅ Lorem ipsum dolor</p>
              <p className='text-2xl text-justify px-10'>✅ Lorem ipsum dolor</p>
              <p className='text-2xl text-justify px-10'>✅ Lorem ipsum dolor</p>
              
            </div>
          <button className='w-6/12 h-[15%] mt-[-40px] text-3xl rounded-3xl bg-indigo-700 text-center'>BUY NOW</button>
          </div>
          <div className='w-[400px] h-[700px] flex flex-col items-center'>
            <h1 className='w-[50%] h-[10%] text-4xl rounded-t-2xl bg-amber-500 text-center flex flex-col justify-center'>Corp</h1>
            <div className='bg-white w-full h-full flex flex-col text-black items-center rounded-3xl text-center gap-10 hover:border-8 hover:border-amber-500'>
              <h1 className='text-3xl mt-10'>$ 159.99<br/>monthly</h1>
              <p className='text-2xl text-justify px-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className='text-2xl text-justify px-10'>✅ Lorem ipsum dolor</p>
              <p className='text-2xl text-justify px-10'>✅ Lorem ipsum dolor</p>
              <p className='text-2xl text-justify px-10'>✅ Lorem ipsum dolor</p>
              <p className='text-2xl text-justify px-10'>✅ Lorem ipsum dolor</p>
            </div>
          <button className='w-7/12 h-[15%] mt-[-44px] text-3xl rounded-3xl bg-amber-500 text-center'>BUY NOW</button>
          </div>
        </div>
      <Footer/>
    </div>
  )
}
