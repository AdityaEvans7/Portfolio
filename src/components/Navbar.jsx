import React, { useState} from 'react'
import pic from "../../public/photo.png"
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseCircleSharp } from "react-icons/io5";
import {Link} from "react-scroll"

function Navbar() {
    const [menu,setMenu]=useState(false);
    const navItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:1,
            text:"About"
        },
        {
            id:1,
            text:"Project"
        },
        {
            id:1,
            text:"Skills"
        },
        {
            id:1,
            text:"Contacts"
        },
        
    ]
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-black'>
    <div className='flex justify-between item-center h-16'>
        <div className='flex space-x-2'>
            <img src={pic} className='h-12 w-12 rounded-full' alt="" />
            <h1 className='font-semibold text-xl cursor-pointer'>Aditya Kr. <span className='text-yellow-500 text-2xl'>Mandal</span>
            <p className='text-sm'>Web Developer</p>
            </h1>
        </div>
        <div>
            <ul className='hidden md:flex space-x-8'>
                {
                    navItems.map(({id,text}) =>(
                        <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                            <Link to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'>
                            {text}
                            </Link></li>

                    ))
                }
            </ul>
            <div onClick={()=>setMenu(!menu)} className='md:hidden'>
            {menu?<IoCloseCircleSharp size={24} />:<AiOutlineMenu size={24} />}
            </div>
        </div>

    </div>
    {
        menu && (
            <div className='bg-white text-black'>
            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
            {
                    navItems.map(({id,text}) =>(
                        <li className='hover:scale-105 duration-200 cursor-pointer font-semibold' key={id}>
                            <Link
                            onClick={()=>setMenu(!menu)}
                             to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'>
                            {text}
                            </Link></li>

                    ))
                }
                    </ul>
            </div>
        )
    }
   

   </div>
   </>
  )
}

export default Navbar
