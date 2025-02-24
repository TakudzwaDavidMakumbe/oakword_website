import React from 'react'
import Navbar from '../components/Navbar'
import bg  from '../../public/edited-06934.jpg'
import  Logo from "../../public/logo_2.png" 



const Contact = () => {
  return (
    <div className='w-full h-full'>
      <div className="md:w-screen md:h-full" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
          <Navbar />
      
          <section className="w-full md:h-screen" >
            <h1 className="md:text-7xl text-4xl flex justify-center pt-[8rem] md:mt-32 text-white md:font-bold">GET IN</h1>
            <h1 className="md:text-7xl flex text-4xl justify-center  text-white md:font-bold">TOUCH WITH</h1>
            <h1 className="md:text-7xl flex text-4xl justify-center  text-white md:font-bold">OUR TEAM</h1>
            <section className="md:w-[100%] pt-[5rem]  md:pt-[14rem] px-2 md:px-[10rem] h-full">
            <div className=" flex-1  md:flex md:py-8 md:rounded-3xl px-2 md:px-0    bg-[#f28020] ">
             <div className="flex-col md:px-4 md:py-5 md:w-[65%]">
             <h1 className="font-extrabold text-xl   text-white md:text-3xl">LEAVE US A MESSAGE</h1>
             <p className="text-white text-sm py-2 md:py-0">Our range of services integrate design, research and innovation to provide seamless innovative cut and edge solutions. </p>
             </div>
             <div className="md:w-fit h-fit p-2 w-full  items-center md:p-10">
              <input type="email" placeholder='Enter email address here' className='text-white border w-full  rounded-lg px-3 py-2' name="" id="" />
             </div>
            </div>
          </section>
          </section>

          

         </div>

         <div className="md:w-full md:px-10 md:mt-32   md:flex-col md:h-full">
            <div className=" md:w-full flex-1 md:flex md:justify-center md:pb-5 md:gap-10">
            <input type="email" name="" className='text-[#02a7e9] py-3 md:w-[50%] rounded-lg border md:px-10 border-black' placeholder='Enter your name here...' id="" />
            <input type="email" name="" className='text-[#02a7e9] py-3 md:w-[50%] rounded-lg border md:px-10 border-black' placeholder='Enter your name here...' id="" />
            </div>
            <div className="w-full">
            <input type="email" name="" className='text-[#02a7e9] py-3 md:w-[100%] rounded-lg md:px-10 border-black border' placeholder='Enter your name here...' id="" />
            </div>
            <div className="w-full md:py-5">
            <input type="email" name="" className='text-[#02a7e9] md:py-28 flex justify-center items-center md:w-[100%] rounded-lg md:px-10 border-black border' placeholder='Enter your name here...' id="" />
            </div>
            
          </div>

          <div className="w-full flex justify-between mb-2 mt-[4rem] md:px-16 h-full md:flex">
            <div className="md:flex-col md:mr-16 w-[50%]">
              <img src={Logo} alt="" className="md:w-[40%]" />
              <p className="text-black text-xl w-[60%]">A Specialist Supplier and Distributor Of Board Products !!</p>
            </div>
            <div className="md:flex-col w-[50%]">

            
            <div className="font-bold">
            <h1 className="font-bold  md:text-2xl text-[#2e388d]">
            READY TO BEGIN YOUR JOURNEY WITH US? LET`S WORK TOGETHER 
          </h1>
            </div>
            <div className="font-bold">
            <h1 className="font-extrabold md:text-2xl  text-[#2e388d] ">Contact Us</h1>
            <p className="text-black py-1">
              NRZ Complex, Seke Road, Harare Zimbabwe
            </p>
            <p className="text-black py-1">
            +263772734257|+263775572191
            </p>
            <p className="text-black">
            (0242)2332573/4
            </p>
            </div>
            </div>
           </div>

           <div className="bg-[#02a7e9] flex justify-between">
          <div className="px-10 py-4">
          <h1 className="text-white">
            Oakwood:All Rights Reserved 
          </h1>
          </div>
          <div className="px-10 py-4">
          <h1 className="text-white">
          Designed By Hyve Agency
          </h1>
          </div>
          
        </div>
        
    </div>
  )
}

export default Contact
