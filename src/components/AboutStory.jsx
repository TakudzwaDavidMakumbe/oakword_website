import React from 'react'
import vector from '../../public/Vector.png' 
import image from '../../public/logo.png'
import Background from '../../public/Rectangle 3.png'
import Button from '../../public/button.png'


const AboutStory = () => {
  return (
    <main className="w-full md:pt-[12rem] pt-[32rem]    2xl:mt-16 md:px-12  ">
        <hr className='py-2 w-full' />
        <div className="md:flex   pb-5 ">
            <section className="md:w-[100%] w-full md:px-12">
            <h1 className="text-black text-xs py-2 md:p-0 md:text-sm px-10  ">Our Story</h1>
            <div className="w-[100%]  md:p-0  px-[5rem]">
            <img src={vector} alt="" className="w-[60%]  md:w-full  " />
            </div>
            </section>


            <section className="py-16 px-3  md:px-20 2xl:mt-[10rem] 2xl:text-2xl  md:text-xl text-sm  mb-5">
              <div className="text-black pb-5">
                <p className="">Mkambo Msika Hubs was founded to address the challenges faced by traditional markets-lack of organization, limited infrastructure, and environmental concerns</p>
                
              </div>  
              <div className="text-black">
                <p className="">We saw an opportunity to bring structure and innovation while preserving the rich cultural essence of marketplaces. From Johannesburg to the rest of Africa, we are redefining what markets can be: thriving,green and inclusive</p>
                
              </div>
            </section>
        </div>
    </main>
  )
}

export default AboutStory