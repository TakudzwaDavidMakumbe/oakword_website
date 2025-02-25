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
            <h1 className="md:text-7xl text-4xl flex justify-center pt-[8rem] bold md:mt-32 text-white md:font-bold">GET IN</h1>
            <h1 className="md:text-7xl flex text-4xl justify-center bold  text-white md:font-bold">TOUCH WITH</h1>
            <h1 className="md:text-7xl flex text-4xl justify-center bold  text-white md:font-bold">OUR TEAM</h1>
            <section className="md:w-[100%] pt-[5rem] pb-10  md:pt-[14rem] px-2 md:px-[10rem] h-full">
            <div className="flex-1 md:flex md:py-8 md:rounded-3xl px-2 md:px-0  bg-[#f28020] ">
             <div className="flex-col md:px-4 md:py-5 md:w-[65%]">
             <h1 className="bold text-xl px-20 md:px-0 text-white md:text-3xl">LEAVE US A MESSAGE</h1>
             <p className="text-white regular text-sm py-2 md:py-0">Our range of services integrate design, research and innovation to provide seamless innovative cut and edge solutions. </p>
             </div>
             <div className="md:w-fit h-fit p-2 w-full items-center md:p-10">
              <input type="email" placeholder='Enter email address here' className='text-white border w-full rounded-lg px-3 py-2' name="" id="" />
             </div>
            </div>
          </section>
          </section>

         </div>

         <div className="md:w-full md:px-10 md:mt- md:flex-col md:h-full"></div>
            <div className="md:w-full flex-1 md:flex md:justify-center md:pb-5 md:gap-10"></div>
         <div className="md:w-full md:px-10 md:mt-32 px-10 py-5 md:py-0    md:flex-col md:h-full">
            <div className=" md:w-full   md:flex md:justify-center md:pb-5 md:gap-10">
            <div className="py-3 md:w-full md:py-0">
            <input type="text" name="" className='text-[#02a7e9] py-3 md:w-[100%] w-full rounded-lg border px-5 md:px-10 border-black' placeholder='Enter your name here...' id="" />
            </div>
            <div className="md:w-full py-3 md:py-0">
            <input type="text" name="" className='text-[#02a7e9] py-3 md:w-[100%] w-full rounded-lg border px-5 md:px-10 border-black' placeholder='Enter your phonenumber here...' id="" />
            </div>
            </div>
            <div className="w-full py-3 md:py-0">
            <input type="email" name="" className='text-[#02a7e9] py-3 md:w-[100%] w-full rounded-lg md:px-10 px-5 border-black border' placeholder='Enter your email here...' id="" />
            </div>
            <div className="w-full py-3  md:py-5">
            <input type="text" name="" className='text-[#02a7e9] md:py-28 w-full flex justify-center items-center md:w-[100%] rounded-lg py-3 px-5 md:px-10 border-black border' placeholder='Enter your message...' id="" />
            </div>
            
          </div>

          <div className="w-full px-4  flex justify-between mb-2 mt-[4rem] md:px-16 h-full md:flex">
            <div className="md:flex-col md:mr-16 w-[50%]">
              <img src={Logo} alt="" className="md:w-[40%] w-[60%]" />
              <p className="text-black regular md:tracking-normal w-[80%] md:text-lg text-xs md:w-[60%]">A Specialist Supplier and Distributor Of Board Products !!</p>
            </div>
            <div className="md:flex-col w-[50%]">

            
            <div className="px-2 md:px-0">
            <h1 className="bold  md:text-2xl -text-xs text-[#2e388d]">
            READY TO BEGIN YOUR JOURNEY WITH US? LET`S WORK TOGETHER 
          </h1>
            </div>
            <div className="bold px-3 md:px-0">
            <h1 className="font-extrabold md:text-2xl  text-xs  text-[#2e388d] ">Contact Us</h1>
            <p className="text-black text-xs regular md:text-lg py-1">
              NRZ Complex, Seke Road, Harare Zimbabwe
            </p>
            <p className="text-black regular text-xs md:text-lg py-1">
            +263 78 555 9787 | +263 78 555 9796
            </p>
            <p className="text-black regular text-xs md:text-lg">
            (0242)2332573/4
            </p>
            </div>
            </div>
           </div>

           <div className="bg-[#02a7e9] regular text-xs md:text-lg flex justify-between">
          <div className="md:px-10 px-2 py-4">
          <h1 className="text-white">
            Oakwood:All Rights Reserved 
          </h1>
          </div>
          <div className="md:px-10 px-2 py-4">
          <h1 className="text-white">
          Designed By Hyve Agency
          </h1>
          </div>
          
        </div>
        
    </div>
  )
}

export default Contact
