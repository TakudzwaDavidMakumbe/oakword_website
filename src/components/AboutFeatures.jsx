import React from 'react'
import logo_1 from '../../public/small_1.png'
import logo_2 from '../../public/small_2.png'
import logo_3 from '../../public/small_3.png'
import logo_4 from '../../public/small_4.png'

const AboutFeatures = () => {
  return (
    <main className="flex-1 w-fit md:flex px-10">
        <section className="mr-10 md:w-[60%]">
            <h1 className="text-black">
                FEATURES
            </h1>
            <div className="text-black text-xs md:w-full  2xl:w-[50%]   font-semibold md:text-2xl">
                <p className="w-full">We bridge the gap between physical markets and the digital economy with accessible platforms for traders and businesses</p>
                
            </div>
        </section>
        
        <section className="md:flex-col      ">
           <div className="md:flex">
           <div className="flex w-1/2 mr-5 mt-8  border  w-full   rounded-lg bg-[#eaece4]">
                <div className="md:px-5 p-1 md:text-sm text-xs   ">
                    <img src={logo_4} width={65} alt="" className="px-5 py-2 " />
                    <h1 className="text-black  mb-1">Modern Layouts </h1>
                    <p className="text-black">Thoughtfully planned spaces to ensure better organization, mobility and safety for traders and shoppers</p>
                   
                </div>
                
            </div>
            <div className="flex w-1/2 mr-5 mt-8  border  w-full  rounded-lg bg-[#eaece4]">
                <div className="md:px-5 p-1 md:text-sm text-xs  ">
                    <img src={logo_1} width={65} alt="" className="px-5 py-2 " />
                    <h1 className="text-black mb-1">Marketplace Management Systems </h1>
                    <p className="text-black mb-3 md:mb-3">Digital tools for inventory, payment and sales tracking</p>
                   
                </div>
                
            </div>
           </div>
            <div className="md:flex ">
            <div className="flex w-1/2 mr-5 mt-8  border w-full   rounded-lg bg-[#eaece4]">
                <div className="md:px-5 p-1 md:text-sm text-xs  ">
                    <img src={logo_2} width={65} alt="" className="px-5 py-2 " />
                    <h1 className="text-black mb-1">Trader Digital Profiles </h1>
                    <p className="text-black mb-3 md:mb-3">Each vendor gets a professional digital presence to attract customers and partnerships </p>
                    
                   
                </div>
                
            </div>
            <div className="flex w-1/2 mr-5 mt-8  border  w-full  rounded-lg bg-[#eaece4]">
                <div className="md:px-5 p-1 md:text-sm text-xs ">
                    <img src={logo_3} width={65} alt="" className="px-5 py-2 " />
                    <h1 className="text-black mb-1">E-commerce integration </h1>
                    <p className="text-black mb-3 md:mb-3">Allow local vendors to showcase their products online and reach a larger audience.</p>
                   
                </div>
                
            </div>
            </div>
        </section>
    </main>
  )
}

export default AboutFeatures