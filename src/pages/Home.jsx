import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import grp1 from '../../public/Group1.png'
// import bg from '../../public/Vector1.png'
import bg from '../../public/bg2.jpg'
import { GiGlobe } from 'react-icons/gi'
import { BsGlobeEuropeAfrica } from 'react-icons/bs'
import { pillars} from '../data/data'
import MissionSection from '../components/home/missionSection'
import { Link } from 'react-router-dom'
import Values from '../components/home/Values'
import Services from '../components/home/Services'
import UnnamedSection from '../components/home/UnnamedSection'
import HumanIntelligence from '../components/home/HumanIntelligence'
import Footer from '../components/Footer'
import CommonCard from '../components/CommonCard'
import Pillars from '../components/home/Pillars'
import  image1 from "../../public/1.png"
import  image2 from "../../public/2.png"
import  image3 from "../../public/3.png"
import  image4 from "../../public/4.png"
import  back from "../../public/back.jpg"
import  image5 from "../../public/5.png"
import  image6 from "../../public/6.png"
import  image7 from "../../public/7.png" 
import  Logo from "../../public/logo_2.png" 

const Home = () => {
  return (
    <div className='w-full h-full'>
   <div className="md:w-screen md:h-full" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
    <Navbar />

    <section className="w-full md:h-screen" >
      <h1 className="md:text-7xl text-4xl flex justify-center pt-[8rem] text-white md:font-bold">GOING</h1>
      <h1 className="md:text-7xl flex text-4xl justify-center  text-white md:font-bold">FURTHER IN STYLE</h1>
      <h1 className="md:text-7xl flex justify-center font-thin text-4xl text-white"> OAKWOOD</h1>
      <section className="md:w-[100%] pt-[10rem]  md:pt-[14rem] px-2 md:px-[10rem] h-full">
      <div className=" flex-1  md:flex md:py-8 md:rounded-3xl px-2 md:px-0    bg-[#f28020] ">
       <div className="flex-col md:px-4 md:w-[65%]">
       <h1 className="font-extrabold text-xl   text-white md:text-3xl">Need A QUOTE?</h1>
       <p className="text-white text-sm py-2 md:py-0">Our range of services integrate design,research and innovation to provide seamless innovative cut and edge solutions</p>
       </div>
       <div className="md:w-fit h-fit p-2 w-full  items-center md:p-10">
        <input type="email" placeholder='Enter email address here' className='text-white border w-full  rounded-lg px-3 py-2' name="" id="" />
       </div>
      </div>
    </section>
    </section>
   </div>

   <section className="w-full flex md:py-28   h-full">
   <div className="flex-col w-full md:px-[18rem] justify-center items-center h-full">
     <h1 className="font-extrabold md:text-4xl text-center text-[#2e388d] ">WHY US?</h1>
     <p className="text-black md:text-2xl">
      We pride ourselves on the close relationships we develop with our clients. It`s through nurturing relationships that we learn how to truly understand their needs and how best to serve them.
     </p>
   </div>
 </section>

 <div className="w-full md:pb-10 md:px-20 h-full">
 <div className="w-full md:flex justify-center h-full">
    <div className="flex-col justify-center text-center md:px-12 border-r">
     <div className="flex justify-center text-center">
     <img src={image1} alt="" className="md:w-[50%] " />
     </div>
      <h1 className="text-[#12b3ca] font-bold">INTEGRITY</h1>
      <p className="text-black text-sm w-[100%] mt-1 ">We hold ourselves to the highest standards and behave honestly and openly</p>
    </div>
    <div className="flex-col justify-center text-center md:px-12 border-r">
      <div className="flex justify-center text-center">
      <img src={image2} alt="" className="md:w-[50%]" />
      </div>
      <h1 className="text-[#12b3ca] font-bold">EXCELLENCE</h1>
      <p className="text-black text-sm w-[100%] mt-1 ">We develop high quality products to meet your precise needs.</p>
    </div>
    <div className="flex-col justify-center text-center md:px-12 border-r">
     <div className="flex justify-center text-center">
     <img src={image3} alt="" className="md:w-[50%]" />
     </div>
     <h1 className="text-[#12b3ca] font-bold">INNOVATION</h1>
      <p className="text-black text-sm w-[100%] mt-1 ">We think creatively, act boldly and action our dreams into reality.</p>
    </div>
    <div className="flex-col justify-center text-center md:px-12 ">
     <div className="flex justify-center text-center">
     <img src={image4} alt="" className="md:w-[40%]" />
     </div>
     <h1 className="text-[#12b3ca] font-bold">RESULTS</h1>
      <p className="text-black text-sm w-[100%] mt-1 ">We stand by our high quality products and commit ourselves to producing durable products.</p>
    </div>
   </div>
 </div>

 <div className="w-full h-full">
  <img src={back} alt="" className="w-[100%]" />
 </div>

 <div className="w-full md:mt-5 h-full">
 <h1 className="font-extrabold md:text-4xl text-center text-[#2e388d] ">TESTIMONIALS</h1>
 <h1 className="font-normal md:text-2xl text-center text-[#2e388d] ">What Clients Say About Us</h1>

 <div className="md:flex justify-center md:px-10 md:py-16  ">
 <div className="md:px-5 md:w-[100%] justify-center items-center ">
 <div className="bg-[#12b2c9] md:py-10  text-white rounded-lg">
    <p className="text-sm md:px-10">
      Oakwood exceeded our expectations! Their attention to detail, professionalism and dedication to delivering exceptional results made our kitchen renovation a dream came true
    </p>
    <div className="flex md:ml-32  md:absolute py">
      <img src={image5} alt="" className="md:w-[20%] border-gray-400 border rounded-full" />
    </div>
  </div>
  
 </div>

 <div className="md:px-5 md:w-[100%] justify-center items-center ">
 <div className="bg-[#12b2c9] md:py-10  text-white rounded-lg">
    <p className="text-sm md:px-10 md:py-2">
      We were blown away by the quality of Oakwood`s work! Their expertise in board cutting, kitchen design and cabinet making is unparalleled.
    </p>
    <div className="flex md:ml-32 md:absolute md:py-2">
      <img src={image6} alt="" className="md:w-[20%] border-gray-400 border rounded-full" />
    </div>
  </div>
  
 </div>

 <div className="md:px-5 md:w-[100%] justify-center items-center ">
 <div className="bg-[#12b2c9] md:py-10  text-white rounded-lg">
    <p className="text-sm md:px-10 md:py-2">
      Oakwood made our renovation process seamless and stress-free. Their team was responsive, knowledgeable and passionate about delivering outstanding results.
    </p>
    <div className="flex md:ml-32 md:absolute py">
      <img src={image7} alt="" className="md:w-[30%] border-gray-400 border rounded-full" />
    </div>
  </div>
  
 </div>


 </div>
 </div>

 <div className="w-full mb-2 mt-[4rem] md:px-16 h-full md:flex">
  <div className="md:flex md:mr-16 w-[30%]">
    <img src={Logo} alt="" className="md:w-[70%]" />
  </div>
  <div className="md:flex-col">
  <h1 className="font-extrabold md:text-2xl  text-[#2e388d] ">Contact Us</h1>
  <div className="font-bold">
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

 <div className="w-full h-full px-5 mb-0 py-6 flex justify-between items-center bg-[#f28020] ">
  <div className="text-white">
    <h1 className="">Oakwood; All Rights Reserved</h1>
  </div>
  <div className="text-white">
    DesignedBy Hyve Agency
  </div>
 </div>

 
   </div>
  )
}

export default Home
