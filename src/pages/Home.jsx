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
const Home = () => {
  return (
   <div className="md:w-screen md:h-full" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
    <Navbar />

    <section className="w-full h-screen" >
      <h1 className="md:text-7xl text-4xl flex justify-center pt-[8rem] text-white md:font-bold">GOING</h1>
      <h1 className="md:text-7xl flex text-4xl justify-center  text-white md:font-bold">FURTHER IN STYLE</h1>
      <h1 className="md:text-7xl flex justify-center font-thin text-4xl text-white"> OAKWOOD</h1>
      <section className="md:w-[100%] pt-[10rem]  md:pt-[14rem] px-2 md:px-[10rem] h-full">
      <div className=" flex-1  md:flex md:py-8 md:rounded-3xl px-2 md:px-0    bg-amber-600 ">
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
  )
}

export default Home
