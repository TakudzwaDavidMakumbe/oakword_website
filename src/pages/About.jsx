import React from 'react'

import Navbar from '../components/Navbar'
import image from '../../public/oakwood-04949.jpg'
import image1 from '../../public/021.jpg'
import image2 from '../../public/oakwood-04624.jpg' 
import image3 from '../../public/partner.png' 
import image4 from '../../public/PG-01-1.png' 

const About = () => {
  return (
    <div className="w-screen h-fit">
      <div className="md:w-screen md:h-full" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
        <Navbar/>

        <div className="text-white w-full h-full md:py-5 md:mt-[18rem]">
        <h1 className="md:text-6xl text-4xl flex justify-center pt-[8rem] bold text-white font-bold">GOING</h1>
        <h1 className="md:text-6xl flex text-4xl justify-center bold text-white font-bold">FURTHER IN STYLE</h1>
        <h1 className="md:text-lg font-bold text-center px-5 md:px-0  text-white regular">A Specialist Supplier and Distributor Of Board Products !!</h1>
        </div>
      </div>
      <div className="w-full md:py-5 md:px-10 h-full">
         <div className="w-full h-full">
         <h1 className="text-[#00abec] flex justify-center pt-3 md:pt-0 md:px-0 bold font-extrabold text-4xl">ABOUT US</h1>
         </div>
         <div className="w-full h-full">
          <p className="text-black regular py-3 px-5 md:px-0 text-sm md:text-2xl md:py-2">
          Oakwood is focused on providing high-end cut and edge solutions to its customers. Our range of services integrate design, research and innovation to provide seamless innovative cut and edge solutions including the latest high end cabinet hardware, wardrobe storage solu- tions, accessories and hardware.
          </p>
          <p className="text-black py-3 regular px-5 md:px-0 text-sm md:text-2xl md:py-2">
          We offer the best cut and edge solutions with well experienced designers and technicians on hand to assist our diverse clients to put their dreams to life. Our clients define their dream and we action them into reality. We have a fully equipped factory with intelligent manufacturing equipment and technology, enabling us to provide precise, seamless products. 
          </p>
          <p className="text-black px-5 regular pb-2 md:pb-0 md:px-0 text-sm md:mb-2 md:py-2 md:text-2xl">
            Oakwood is committed to quality to service. We create value for customers by providing them with design and ancillary services at no cost. We are here to help you realize your dream!
          </p>
          <div className="bg-[#00abec] py-1 w-[40%] px-5 ml-5 md:ml-0 mt-3 md:mt-0 md:px-0 md:w-[15%]">
          </div>
          <div className="w-full mt-6 h-full md:flex">
              <div className="flex-col">
                <div className="">
                <img src={image1} alt="" className="w-[100%]" />
                </div>
                <h1 className="text-[#00abec] flex justify-center md:mt-4 md:py-8 pt-3 md:pt-10 bold font-extrabold text-4xl">OUR VISION</h1>
                <p className="text-black regular mb-3 md:mb-0 md:-mt-3 md:text-2xl text-sm text-center md:px-0 md:w-[100%]">
                   We aim to be the best supplier of a variety of modernized boards and timber for customized furniture and fittings in homes and offices.
                </p>
              </div>
              <div className="flex-col md:py-8 md:px-5">
                <div className="absolute mt-[19rem] md:mt-0   md:relative">
                <h1 className="text-[#00abec] flex justify-center md:px-0 bold font-extrabold text-4xl">OUR MISSION</h1>
                  <p className="text-black md:py-3 text-sm text-center md:text-2xl pt-2 md:pt-0 md:mb-6 px-5 md:px-0 pb-5 md:pb-0 regular md:w-[100%]">
                  To use modern technology and a dedicated, well-motivated team in providing superior customer experience through creative designs, inspirational ideas &nd tips for kitchen cupbeards, built in cabinets &nd other home &nd office furniture.
                </p>
                </div>
                 
                <div className="">
                <img src={image2} alt="" className="w-[100%]" />

                </div>
                
              </div>
            </div>
            <div className="bg-[#00abec] mt-50  py-1 w-[90%] ml-4   md:ml-0  md:mt-0 md:px-0   md:w-[100%]"></div>

            <div className="w-full pt-5 md:pt-0  flex justify-center md:mt-5 items-center h-full">
              <div className="md:w-[30%] w-[70%]  md:py-10">
                <h1 className="bg-gradient-to-r text-center rounded-lg md:text-2xl from-[#283980] md:p-2 py-2 md:py-0 font-bold bold  text-white to-[#02a7e9] ">
                  <span className="font-thin md:text-2xl regular">OUR</span> PARTNERS
                </h1>
              </div>

              
            </div>

            <div className="flex justify-center items-center">
                <img src={image3} alt="" className="w-[35%] " />
                <img src={image4} alt="" className="w-[35%] " />
              
              </div>

         </div>
        </div>


        <div className="bg-[#bcd22f] md:flex md:justify-between py-3 px-10 w-full h-full">
         <div className="md:w-[50%]  ">
         <h1 className=" md:text-4xl bold text-lg  px-12 md:px-0 text-white">
            READY TO BEGIN YOUR
          </h1>
          <h1 className=" md:text-4xl px-15 text-lg bold  md:px-0 text-white">
            JOURNEY WITH US?
          </h1>
         </div>
         <div className="md:flex md:gap-3 justify-center text-center items-center ">
          <div className="text-white text-2xl font-thin px-5 regular  md:px-0 pb-3 md:pb-0  "><h1>LET`S WORK TOGETHER</h1> </div>
          <input type="email" name="" className='rounded-lg border text-white py-2 md:w-[42%] w-[100%] border-white px-3 ' placeholder='Enter email address here' id="" />

         </div>
        </div>

        <div className="bg-[#02a7e9] flex regular justify-between">
          <div className="md:px-10 px-3 py-4">
          <h1 className="text-white text-xs  md:text-xl">
            Oakwood:All Rights Reserved 
          </h1>
          </div>
          <div className="md:px-10 px-3 py-4">
          <h1 className="text-white text-xs   md:text-xl">
          Designed By Hyve Agency
          </h1>
          </div>
          
        </div>
    </div>
  )
  
}

export default About