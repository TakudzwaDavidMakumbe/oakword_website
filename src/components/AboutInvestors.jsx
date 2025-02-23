import React from 'react'
import logo from '../../public/image001.png'
import member from '../../public/member.png'
import vector from '../../public/Vector.png'
import image from '../../public/Group 2.png'


const AboutInvestors = () => {
  return (
    <div className='w-full     '>
      <div className=" bg-[#8b1f05] md:px-12  " >
        <div className="md:w-full flex  ">
         <div className="md:py-10  py-20 px-5">
         <img src={logo} alt=""  className="md:w-[50%] w-[100%]" />
         </div>
         <div className="w-[40%]  2xl:w-[50%] 2xl:pl-[20%] md:w-[40%]  ">
         <div className="" style={{backgroundImage:`url(${vector})`,backgroundSize: "cover",  backgroundRepeat: 'no-repeat', width: '100%', height: '30vh'}}></div>
         </div>
        </div>

        <main className="  md:px-28">
        <section className="flex-1 flex-2 justify-center items-center  px-5  md:flex ">
          <div className="w-full flex justify-center items-center   ">
            <div className="">
              <img src={member} alt="" className=' rounded-lg  md:w-[90%]' />
              <p className="text-white text-sm md:text-sm">Kristine Runoifsson</p>
              <p className="text-white text-sm md:text-sm">CEO</p>
            </div>
          </div>
          <div className="w-full  ">
            <div className="">
              <img src={member} alt="" className=' rounded-lg   md:w-[90%]' />
              <p className="text-white text-sm md:text-sm">Lena Konopelski</p>
              <p className="text-white text-sm md:text-sm">CTO</p>
            </div>
          </div>
          <div className="w-full  mb-3  ">
            <div className="">
              <img src={member} alt="" className=' rounded-lg  md:w-[90%]' />
              <p className="text-white text-sm md:text-sm">Jessica Mercedes</p>
              <p className="text-white text-sm md:text-sm">INFRASTRUCTURE SUPERVISOR</p>
            </div>
          </div>
        </section>

        <section className="flex-1 md:pb-9   md:flex  px-5">
          <div className="w-full  ">
            <div className="">
              <img src={member} alt="" className=' rounded-lg  md:w-[90%]' />
              <p className="text-white text-sm md:text-sm">Leigh Cremin</p>
              <p className="text-white text-sm md:text-sm">CONSULTANT</p>
            </div>
          </div>
          <div className="w-full  ">
            <div className="">
              <img src={member} alt="" className=' rounded-lg   md:w-[90%]' />
              <p className="text-white text-sm md:text-sm">Elena Kertzmann</p>
              <p className="text-white text-sm md:text-sm">INTERACTIONS STRATEGIST</p>
            </div>
          </div>
          <div className="w-full     ">
            <div className="py-4 md:py-0">
              <img src={member} alt="" className=' rounded-lg  md:w-[90%]' />
              <p className="text-white text-sm md:text-sm">Marshall Gislason</p>
              <p className="text-white text-sm md:text-sm">ANALYST</p>
            </div>
          </div>
          <div className="w-full     ">
            <div className="py-4 md:py-0">
              <img src={member} alt="" className=' rounded-lg  md:w-[90%]' />
              <p className="text-white text-sm md:text-sm">Jessy Morales</p>
              <p className="text-white text-sm md:text-sm">BRANDING STRATEGIST</p>
            </div>
          </div>
        </section>
        
        </main>
      </div>
      <div className="">
          <img src={image} alt="" className="w-full" />
        </div>
    </div>
  )
}

export default AboutInvestors