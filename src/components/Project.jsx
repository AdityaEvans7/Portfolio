import React from 'react'
import ProjectApp from '../../public/ProjectApp.png';
import Shopping from "../../public/Shopping.png";
import Starwars from "../../public/Starwars.png";
import coke from "../../public/coke.png";
import jarvis from "../../public/jarvis.png";

function Project() {
    const cardItem = [
        {
            id:1,
            logo:ProjectApp,
            name:"UI Movie Booking App"
        },
        {
            id:2,
            logo:Shopping,
            name:"Shopping Page"
        },
        {
            id:3,
            logo:Starwars,
            name:"Starwars Page"
        },
        {
            id:4,
            logo:jarvis,
            name:"Javris AI"
        },
        {
            id:1,
            logo:coke,
            name:"Coca Cola"
        },
    ]
  return (
    <>
    <div name="Project" 
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <div>
        <h1 className='text-3xl font-bol mb-5'>Project</h1>
        <span className=' text-yellow-300 underline font-semibold'>Featured Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
            {
                cardItem.map(({id,logo,name}) =>(
                    <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                        <img src={logo} className="w-[120x] h-[120px] p-1  border-[2px]" alt="" />
                        <div>
                            <div className=' px-2 font-bold text-xl mb-2 '>{name}</div>
                            <p className='px-2 text-gray-700'>lorem ipsum, dolor sit amet consct elit.</p>
                        </div>
                        <div className='px-6 py-4 space-x-3 justify-around flex'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>View Image</button>
                            <button className='bg-yellow-300 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded'>Source Code</button>
                        </div>

                    </div>
                ))

        
            }
        </div>
      </div>
    </div>
    </>
  )
}

export default Project
