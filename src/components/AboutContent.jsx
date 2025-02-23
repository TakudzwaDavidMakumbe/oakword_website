import React from 'react'
import image from '../../public/image.png'
import image_1 from '../../public/image 6.png'
import vector from '../../public/Vector.png'


const AboutContent = () => {
  return (
    
    <main className="w-fit md:pt-20    p-4 md:px-10 h-full    md:flex justify-center items-center ">
        <section className="md:py-10  w-[100%] md:px-12">
            <h1 className="text-black text-2xl md:text-sm ">About</h1>
            <div className="text-black font-semibold text-sm md:-w[100%]       py-2  tracking-thin md:text-2xl">
                <p className="md:-w[100%]"> At Mkambo Misika Hubs, we believe in building more than just marketplaces-we`re cultivating sustainable ecosystems where communities, traders, and businesses can thrive together    </p>
                
            </div>
            
            <div className="py-[3rem]">
                <img src={image} alt="image" className="md:w-[55%]  rounded-lg "/>
            </div>
            <div className="2xl:text-lg  md:w-[55%]  md:text-sm p-5 md:px-0 md:pt-2 tracking-wide">
                <p className="text-black ">Our hubs bring innovation, organization, and accesibility to traditional market spaces, creating opportunities for everyone, from local farmers to small budinesses and global partners</p>
            </div>
        </section>

        <section className="md:w-[20%]  md:flex " style={{backgroundImage: `url(${vector})`, backgroundSize: "cover",  backgroundRepeat: 'no-repeat', width: '100%', height: '80vh'}}>
            <div className="md:w-[50%] md:absolute">
            <div className="md:absolute md:mt-[8rem] flex md:pl-[17rem] md:justify-center top-[14rem] ">
            </div>
           
            <img src={image_1} alt="" className="md:w-[45%] w-[100%] md:ml-[10rem] md:mt-[16rem]  rounded-lg " />
            </div>
        </section>
        
        
    </main>
  )
}

export default AboutContent