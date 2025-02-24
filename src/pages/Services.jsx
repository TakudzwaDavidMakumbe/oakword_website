import React from 'react'
import Navbar from '../components/Navbar'
import bg from '../../public/edited-06915.jpg' 
import image from '../../public/oakwood-04866.jpg'  
import image1 from '../../public/431.png'  
import image2 from '../../public/edited-06946_2.jpg'  
import image3 from '../../public/12.png' 
import image4 from '../../public/oakwood-04731.jpg'  
import image5 from '../../public/oakwood-04731.jpg'
import image6 from '../../public/pic.png' 

const Services = () => {
  return (
    <div className='w-screen h-screen '>
       <div className="md:w-screen md:h-full" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
    <Navbar />

    <section className="w-full md:h-screen" >
      <h1 className="md:text-7xl text-4xl flex justify-center md:mt-[14rem] pt-[8rem] text-white md:font-bold">GOING</h1>
      <h1 className="md:text-7xl flex text-4xl justify-center  text-white md:font-bold">FURTHER IN STYLE</h1>
      <section className="md:w-[100%] pt-[2rem]   px-2 md:px-[10rem] h-full">
      <div className=" flex-1  md:flex md:py-8 md:rounded-3xl px-2 md:px-0   bg-gradient-to-r  from-[#283980] md:p-2 to-[#02a7e9] ">
       <div className="flex-col md:px-10 md:w-[100%]  ">
       <h1 className="font-extrabold text-xl   text-white md:text-4xl">OUR SERVICES</h1>
       <p className="text-white text-sm md:text-2xl py-2 md:py-0">A Specialist Supplier and Distributor of Board Products!!</p>
       </div>
      
      </div>
    </section>
    </section>
   </div>

   <div className="w-full px-10 md:pt-32 h-full">
      <div className="md:flex">
       <div className="w-1/2">
       <img src={image} alt="" className="w-[100%]" />
       </div>
       <div className="md:px-3 md:flex-col md:py-10 md:w-1/2">
        <h1 className="text-black font-bold md:text-3xl ">MELAMINE BOARDS</h1>
        <p className="text-black  tracking-wide md:mt-5 md:text-lg">Melamine is a organic chemical compound that can be mixed with form & idehyde to produce & thermosetting plastic. The product is called melamine resin and is used in the timber industry as a high pressure decorative laminate. It is extremely durable &nd has certain fire resistant properties. These properties make it a suitable choice for products such as laminate flooring, Formica, dry erase boards and dinnerware.</p>
       </div>
      </div>

      <div className=" md:flex">
      
       <div className="md:px-3 md:flex-col md:py-28">
        <h1 className="text-black font-bold md:text-3xl md:flex md:justify-end ">HIGH GLOSS MDF</h1>
        <p className="text-black  tracking-wide  md:mt-5 md:text-lg">This is a premium finish on chipboard or supawood, High Gloss MDF Board is suitable for use on fine quality residentail &nd contract furniture, casework and also for architectural application on inside wall, interior doors and sliding door systems.</p>
       </div>
       <div className="w-[100%]">
       <img src={image1} alt="" className="w-[100%]" />
       </div>
      </div>

      <div className="md:flex">
       <div className="w-1/2">
       <img src={image2} alt="" className="w-[100%]" />
       </div>
       <div className="md:px-3 md:flex-col md:py-10 md:w-1/2">
        <h1 className="text-black font-bold md:text-3xl ">QUARTZ</h1>
        <p className="text-black  tracking-wide md:mt-5 md:text-lg">Quartz is & great option for those households that spend a lot of time in the kitchen preparing meals because it resits most of the normal wear and tear that comes along with it. It is nearly indestructible when it comes to physical forces, but regular exposure to extreme heat may lead to discoloration over time. To prevent this from happening, make sure you lay down a potholder or some other kind of barrier between the counter and hot dishes.</p>
       </div>
      </div>

      <div className=" md:pt-8 md:flex">
       <div className="md:px-3 md:flex-col md:py-10 md:w-1/2">
        <h1 className="text-black font-bold md:text-3xl ">QUARTZ</h1>
        <p className="text-black  tracking-wide md:mt-5 md:text-lg">Quartz is & great option for those households that spend a lot of time in the kitchen preparing meals because it resits most of the normal wear and tear that comes along with it. It is nearly indestructible when it comes to physical forces, but regular exposure to extreme heat may lead to discoloration over time. To prevent this from happening, make sure you lay down a potholder or some other kind of barrier between the counter and hot dishes.</p>
       </div>

       <div className="w-1/2">
       <img src={image3} alt="" className="w-[100%]" />
       </div>
      </div>

      <div className="md:flex">
      <div className="w-1/2">
       <img src={image5} alt="" className="w-[100%] md:mt-5" />
       </div>
       
       <div className="md:px-3 md:flex-col   md:py-32 md:w-1/2">
        <h1 className="text-black font-bold md:text-3xl ">CUTTING AND EDGING</h1>
        <p className="text-black  tracking-wide md:mt-5 md:text-lg">Cutting-edge precision, edging perfection.Trust our experienced team to deliver high-quality board cutting and edging services that exceed your expectations.</p>
       </div>
      </div>

      <div className="  md:flex">
       <div className="md:px-3 md:flex-col md:py-10 md:w-1/2">
        <h1 className="text-black font-bold md:text-3xl flex justify-end ">CABINET HARDWARE</h1>
        <p className="text-black  tracking-wide md:mt-5 md:text-lg">Backplates, Cabinet Bumpers, Cabinet Hardware Accessories Cabinet Hinges, Cabinet Knobs, Cabinet Latches, Drawer Hardware.</p>
       </div>

       <div className="w-1/2">
       <img src={image6} alt="" className="w-[100%]" />
       </div>
      </div>
      

      <div className=" md:pb-10  flex-col text-center">
      <h1 className="text-[#00abec]  font-bold md:text-4xl">
        READY TO BEGIN YOUR
      </h1>
      <h1 className="text-[#00abec] font-bold md:text-4xl">
        JOURNEY WITH US?
      </h1>
      <h1 className="text-[#00abec] font-THIN md:text-3xl">
        LET`S WORK TOGETHER
      </h1>
      <div className="md:mb-5 md:py-2">
        <input type="email" name="" placeholder='Enter email address here ' className='p-3 text-yellow-300 md:w-[25%] rounded-lg border' id="" />
      </div>
    </div>

    <div className="bg-[#02a7e9] w-full flex justify-between">
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

   
        </div>
  )
}

export default Services