import React from 'react'
import image from '../../public/logo.png'
import Background from '../../public/Rectangle 3.png'
import Button from '../../public/Container1.png'

const AboutVideoSection = () => {
  return (
    <div className='w-fit'>
        <section className="flex justify-center items-center">
            <div className=" justify-center rounded-lg  items-center" >
                <div className="flex 2xl:px-[25rem] py-10 md:pl-16 justify-center items-center">
                <img src={Button} alt=""  className='text-white w-[90%] 2xl:w-full md:w-[60%]' />
                
                </div>
            </div>

        </section>
    </div>
  )
}

export default AboutVideoSection