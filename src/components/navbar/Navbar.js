import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] =useState(false);

    const toggleChange = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <header className='bg-white border-b border-gray-200 relative'>
                <div className='container mx-auto flex justify-between p-5 items-center'>
                    {/* LOGO */}
                    <div>
                        <Link to='/'>
                            <h3 className='font-bold text-2xl'>
                               Brainy Lingo
                            </h3>
                        </Link>
                    </div>

                    {/* NAVIGATION */}
                    <div className='hidden md:block'>
                    <ul className='flex items-center text-lg justify-center font-semibold'>
                        <Link to='/'>
                            <li className='mr-5 hover:text-gray-900 cursor-pointer'>Home</li>
                        </Link>
                        <li className='mr-5 hover:text-gray-900 cursor-pointer'>Leaderborad</li>
                        <li className='mr-5 hover:text-gray-900 cursor-pointer'>Daily Quiz</li>
                    </ul>
                    </div>

                    {isOpen?
                        <div className='transition ease-in duration-300'>
                        <ul className='flex flex-col gap-10 text-2xl absolute top-[73px]  z-10 left-0 h-screen bg-red-500 w-full text-white items-center justify-center font-semibold'>
                            <Link to='/'>
                                <li className='mt-5 hover:text-gray-900 cursor-pointer'>Home</li>
                            </Link>
                            <li className='mt-5 hover:text-gray-900 cursor-pointer'>Leaderborad</li>
                            <li className='mt-5 hover:text-gray-900 cursor-pointer'>Daily Quiz</li>

                        </ul>

                        <button className='absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer' onClick={toggleChange}>
                            <RxCross2 size={20}/>
                        </button>
                        </div>
                        : ""
    
                    }


                    {/* LOGIN BUTTON */}
                    <div className='flex justify-center items-center gap-3'>
                        <button className=' bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-semibold'>
                            Login
                        </button>
                
                        {isOpen? "" : <button className='block md:hidden' onClick={toggleChange}>
                            <GiHamburgerMenu size={25}/>
                        </button>}
                        
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar