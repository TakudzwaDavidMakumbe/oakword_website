import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    
              
                <div className='w-full  bg-white text-black p-4 md:p-8'>
                        <div className='w-full flex-1 md:flex justify-between items-center'>
                            <div className='w-full  md:w-1/2'>
                                <img src="/logo1.png" className='md:w-[15%] flex  w-[40%] py-3' alt="" />
                                <span>
                                    <h3 className='font-bold md:text-lg text-sm  '>Subscribe for our newsletter</h3>
                                </span>

                                <span className="">
                                    <p className="md:text-sm text-xs py-3 md:w-[50%]">Join our newsletter to receive update on market developments, innovations, and opportunities. </p>
                                </span>

                                <span className='w-full'>
                                    <input type="email" name="" id="" placeholder='Email' className='text-black p-2 border  rounded-lg md:px-3 w-[90%] md:py-2 md:w-[40%] ' />
                                </span>
                            </div>

                            <div className="w-full md:mt-0 mt-2 flex-1 md:flex">
                                <div className='w-1/2 gap-1 flex flex-col mb-2'>
                                    <h3 className='font-bold md:text-lg text-sm'>MAIN PAGES</h3>
                                    <Link to='/' className='text-xs md:text-sm'>Home</Link>
                                    <Link to='/about' className='text-xs md:text-sm'>About</Link>
                                    <Link to='/contact' className='text-xs md:text-sm'>Contact</Link>
                                </div>
                                <div className='w-1/2 flex  gap-1  flex-col mb-2'>
                                    <h3 className='font-bold md:text-lg text-sm'>COMPANY</h3>
                                    <Link to='/' className='text-xs md:text-sm'>Contact Us</Link>
                                    <Link to='/' className='text-xs md:text-sm'>Privacy Policy</Link>
                                    <Link to='/' className='text-xs md:text-sm'>Careers</Link>
                                </div>
                                <div className='w-1/2 flex  gap-1  flex-col  '>
                                    <h3 className='font-bold md:text-lg text-sm'>CONTACT & OTHER </h3>
                                    <p className='text-xs md:text-sm'> info@mkambohubs.com </p>
                                    <p className='text-xs md:text-sm'>+263 12456 789</p>
                                    <p className='text-xs md:text-sm'>
                                        123 Green Market Lane, Harare, Zimbabwe    
                                    </p>
                                </div>
                            </div>

                      </div>

                      <span>
                        <hr className="w-full mt-4" />
                      </span>

                        <div className='w-full flex gap-4 md:gap-5 py-4'>
                            <span className="">
                            <FaFacebook />
                            </span>
                            <span className="">
                            <BsYoutube />
                            </span>
                            <div className="">
                            <GrLinkedin />
                            </div>
                            <p className='text-xs md:text-sm'>© 2021 Mkambo Hubs. All Rights Reserved</p>   
                        </div>

                        
                      <span>
                        <hr className="w-full " />
                      </span>

                </div>
  )
}

export default Footer
