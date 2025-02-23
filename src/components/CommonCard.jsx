import React from 'react'
import { Link } from 'react-router-dom'
const CommonCard = () => {
  return (
    <div className='w-full p-5 md:p-8 bg-white'>

    <div className='bg-[#8b1f05] rounded-2xl flex flex-col space-x-6 space-y-4 justify-center items-center w-full p-4 md:p-16  text-white ' >
        <div>
            <img src="/Vector4.png" alt="" className='w-fit h-10' />
        </div>
        <div className='w-full md:w-1/2'>
            <p className='text-center text-2xl md:text-4xl'>
            Maximize growth with Mkambo Misika Hubs
            </p>
        </div>
        <div>
            <Link to='/contact'><button className='bg-[#eef3ca] text-black px-3 py-1 rounded-full '>Contact us </button></Link>
        </div>
    </div>

</div>
  )
}

export default CommonCard
