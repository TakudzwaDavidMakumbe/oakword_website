import React from 'react'
import Navbar from '../components/Navbar'
import bg from '../../public/edited-06915.jpg' 
import image from '../../public/oakwood-04866.jpg'  
import image1 from '../../public/431.png'  
import image2 from '../../public/23.png'  
import image3 from '../../public/12.png' 
import image4 from '../../public/oakwood-04731.jpg'  
import image5 from '../../public/oakwood-04731.jpg'
import image6 from '../../public/1699691557858.png' 

const Services = () => {
  return (
    <div className='w-screen h-screen '>
       <div className="md:w-screen md:h-full" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
    <Navbar />

    <section className="w-full md:h-screen" >
      <h1 className="md:text-7xl text-4xl flex justify-center md:mt-[14rem] bold pt-[8rem] text-white font-bold">GOING</h1>
      <h1 className="md:text-7xl flex text-4xl justify-center bold  text-white font-bold">FURTHER IN STYLE</h1>
      <section className="md:w-[100%] pt-[2rem] pb-5 mb:pb-0   px-2 md:px-[10rem] h-full">
      <div className=" flex-1  md:flex md:py-8 md:rounded-3xl px-2 md:px-0   bg-gradient-to-r  from-[#283980] md:p-2 to-[#02a7e9] ">
       <div className="flex-col md:px-10 md:w-[100%]  ">
       <h1 className="font-extrabold text-xl flex justify-center md:justify-normal md:px-0 bold  text-white md:text-4xl">OUR SERVICES</h1>
       <p className="text-white flex justify-center md:justify-normal text-sm md:text-2xl regular py-2  md:px-0  md:py-0">A Specialist Supplier and Distributor of Board Products!!</p>
       </div>
      
      </div>
    </section>
    </section>
   </div>

   
   <div className="">
   <div className="w-full  px-10 md:pt-32 h-full">
      <div className="md:flex md:mb-8 pt-5 md:pt-0 mb-3 ">
       <div className="md:w-1/2 order-1 md:order-none">
       <img src={image} alt="" className="w-[100%]" />
       </div>
       <div className="md:px-3 md:pt-4 md:flex-col md:items-center md:justify-center md:py-10 md:w-1/2 ">
        <h1 className="text-black  md:text-3xl bold ">MELAMINE BOARDS</h1>
        <p className="text-black  regular md:mt-5 md:text-2xl">Melamine is a organic chemical compound that can be mixed with form & idehyde to produce & thermosetting plastic. The product is called melamine resin and is used in the timber industry as a high pressure decorative laminate. It is extremely durable &nd has certain fire resistant properties. These properties make it a suitable choice for products such as laminate flooring, Formica, dry erase boards and dinnerware.</p>
       </div>
      </div>

      <div className=" md:mb-7  md:flex">
      
       <div className="md:px-3 md:w-[98%] md:flex-col md:relative md:items-center md:justify-center absolute mt-[13rem] md:mt-0 md:py-20">
        <h1 className="text-black bold md:text-3xl md:flex  ">HIGH GLOSS MDF</h1>
        <p className="text-black  regular  md:mt-5 md:text-2xl">This is a premium finish on chipboard or supawood, High Gloss MDF Board is suitable for use on fine quality residentail &nd contract furniture, casework and also for architectural application on inside wall, interior doors and sliding door systems.</p>
       </div>
       <div className="w-[100%]">
       <img src={image1} alt="" className="w-[100%]" />
       </div>
      </div>

      <div className="md:flex mb-3 md:mb-0 mt-48 md:mt-0">
       <div className="md:w-1/2">
       <img src={image2} alt="" className="w-[100%]" />
       </div>
       <div className="md:px-3 pt-4  md:pt-3 md:flex-col md:py-16 md:w-1/2">
        <h1 className="text-black bold md:text-3xl ">QUARTZ</h1>
        <p className="text-black   regular md:mt-5 md:text-2xl">Quartz is & great option for those households that spend a lot of time in the kitchen preparing meals because it resits most of the normal wear and tear that comes along with it. It is nearly indestructible when it comes to physical forces, but regular exposure to extreme heat may lead to discoloration over time. To prevent this from happening, make sure you lay down a potholder or some other kind of barrier between the counter and hot dishes.</p>
       </div>
      </div>

      <div className=" w-full md:mb-4 md:pt-8 md:flex">
       <div className="md:px-3 md:flex-col md:w-[50%] md:relative absolute mt-[14rem] md:mt-14 md:py-7">
        <h1 className="text-black bold md:text-3xl ">WRAPPED DOORS</h1>
        <p className="text-black   regular md:mt-5 md:text-2xl"> A multitude of pa erns and designs can be applied to it through our CNC process. These doors are made by coating the substrate with high pedormance adhesive, applying the vinyl and then applying vacuum pressure to the door.</p>
       </div>

       <div className="md:w-1/2 w-full">
       <img src={image3} alt="" className="w-[100%]" />
       </div>
      </div>

      <div className="md:flex md:mb-8 mt-48 md:mt-0">
      <div className="md:w-1/2">
       <img src={image5} alt="" className="w-[100%] md:mt-5" />
       </div>
       
       <div className="md:px-3 md:flex-col mt-3 md:mt-0 w-full    md:py-28 md:w-1/2">
        <h1 className="text-black bold md:text-3xl ">CUTTING AND EDGING</h1>
        <p className="text-black  regular md:mt-5   md:text-2xl">Cutting-edge precision, edging perfection.Trust our experienced team to deliver high-quality board cutting and edging services that exceed your expectations.</p>
       </div>
      </div>

      <div className="  md:flex">
       <div className="md:px-3 md:w-[72%]  md:flex-col md:relative absolute mt-[12rem] md:mt-5 md:py-20">
        <h1 className="text-black font-bold md:text-3xl flex  ">CABINET HARDWARE</h1>
        <p className="text-black  regular md:mt-5 md:text-2xl">Backplates, Cabinet Bumpers, Cabinet Hardware Accessories Cabinet Hinges, Cabinet Knobs, Cabinet Latches, Drawer Hardware.</p>
       </div>

       <div className="">
       <img src={image6} alt="" className="w-[100%]" />
       </div>
      </div>
      

      <div className=" md:pb-10 mt-28 md:mt-4 mb-3 md:mb-0   flex-col text-center">
      <h1 className="text-[#00abec]  bold md:text-4xl">
        READY TO BEGIN YOUR
      </h1>
      <h1 className="text-[#00abec] bold md:text-4xl">
        JOURNEY WITH US?
      </h1>
      <h1 className="text-[#00abec] regular md:text-3xl">
        LET`S WORK TOGETHER
      </h1>
      <div className="md:mb-5 md:py-2">
        <input type="email" name="" placeholder='Enter email address here ' className='p-3 border-yellow-300  md:w-[25%] rounded-lg border' id="" />
      </div>
    </div>

    
    </div>

    <div className="bg-[#02a7e9] w-full regular  text-xs md:text-sm  flex justify-between">
          <div className="md:px-10 py-4">
          <h1 className="text-white">
            Oakwood:All Rights Reserved 
          </h1>
          </div>
          <div className="md:px-10 py-4">
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