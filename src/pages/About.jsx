import React from 'react'
import AboutContent from '../components/AboutContent'
import AboutStory from '../components/AboutStory'
import AboutInvestors from '../components/AboutInvestors'
import MissionSection from '../components/home/missionSection'
import AboutVideoSection from '../components/AboutVideoSection'
import AboutFeatures from '../components/AboutFeatures'
import Navbar from '../components/Navbar'
import CommonCard from '../components/CommonCard'
import Footer from '../components/Footer'
import PatternImage from '../components/PatternImage'
import image from '../../public/oakwood-04949.jpg'


const About = () => {
  return (
    <div className="w-screen h-fit">
      <div className="md:w-screen md:h-full" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
        <Navbar/>

        <div className="text-white w-full h-full md:py-5 md:mt-[18rem]">
        <h1 className="md:text-6xl text-4xl flex justify-center pt-[8rem] text-white md:font-bold">GOING</h1>
        <h1 className="md:text-6xl flex text-4xl justify-center  text-white md:font-bold">FURTHER IN STYLE</h1>
        <h1 className="md:text-lg font-bold text-center   text-[#2e388d]  ">A Specialist Supplier and Distributor Of Board Products !!</h1>
        </div>
    </div>
    <div className="w-full md:py-5 md:px-10  h-full">
         <div className=" w-full h-full ">
         <h1 className="text-[#00abec] px-3 md:px-0  font-extrabold text-4xl">ABOUT US</h1>
         </div>
         <div className="w-full h-full">
          <p className="text-black py-3 px-3 md:px-0 text-sm md:text-lg md:py-2 ">
            Oakwood is focused on providing high-end cut and edge solutions to ts customers. Our range of services integrate design, research and innovation to provide seamless innovation cut and edge solutions including the latest high end cabinet hardware, wardrobe storage solutions, accessories and hardware.
          </p>
          <p className="text-black py-3 px-3 md:px-0 text-sm md:text-lg md:py-2">
            We offer the best cut and edge solutions with well experienced designers and technicians on hand to assit our diverse clients to put their dreams to life. Our clients define their dreams and we action them into reality. We have a fully equipped factory with intelligent manufacturing equipment and technology, enabling us to provide precise, seamless products. 
          </p>
          <p className="text-black px-3 md:px-0 text-sm md:mb-2 md:py-2 md:text-lg">
            Oakwood is commiEed to quality to service. We create value for customers by providing them with design and ancillary services at no cost. We are here to help you realize your dream!
          </p>
          <div className="bg-[#00abec] py-1 w-[40%] px-5 ml-5 md:ml-0 mt-3 md:mt-0 md:px-0  md:w-[15%]">
            
          </div>
         </div>
        </div>
    </div>
  )
  
}

export default About