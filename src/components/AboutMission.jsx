import React from 'react'
import image from '../../public/Group 2.png'
import image_1 from '../../public/small1.png'
import image_2 from '../../public/small.png'

const AboutMission = () => {
  return (
    <main className=" px-10 ">
      <img src={image} alt="" className="" />
      <div className="text-black mt-5 text-center">
          OUR MISSION
          <section className="text-black font-semibold text-2xl text-center">
            <p className="">Reshaping Zimbabwe`s markets into thriving</p>
            <p className="flex justify-center items-center gap-1 ">hub<img src={image_1} alt="" className="rounded-full  w-[4%]" /> that uplift communities, foster</p>
            <p className="flex justify-center gap-1 items-center ">inclusive economic <img src={image_2} alt="" className="rounded-full w-[4%]" /> activities and drive </p>
            <p className=""> sustainable national progress for generations</p>
            <p className="">to come.</p>
          </section>
      </div>
      <hr className="w-full my-6" />
    </main>
  )
}

export default AboutMission