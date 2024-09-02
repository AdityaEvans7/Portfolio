import React from 'react'
import resizeandroid from '../../public/resizeandroid.png';
import resizehtml from "../../public/resizehtml.png";
import resizecss from "../../public/resizecss.png";
import resizejavascript from "../../public/resizejavascript.png";
import resizenode from "../../public/resizenode.png";
import resizereaction from "../../public/resizereact.png";
import resizemongodb from "../../public/resizemongodb.png";
import resizefigma from "../../public/resizefigma.png";

function Skills() {
    const cardItem = [
        {
            id:1,
            logo:resizeandroid,
            name:"Android Studio"
        },
        {
            id:2,
            logo:resizefigma,
            name:"Figma"
        },
        {
            id:3,
            logo:resizehtml,
            name:"HTML"
        },
        {
            id:4,
            logo:resizecss,
            name:"CSS"
        },
        {
            id:5,
            logo:resizejavascript,
            name:"JavaScript"
        },
        {
            id:6,
            logo:resizereaction,
            name:"React"
        },
        {
            id:7,
            logo:resizenode,
            name:"Node JS"
        },
        {
            id:8,
            logo:resizemongodb,
            name:"MongoDB"
        },
    ]
  return (
    <>
    <div name="Skills" 
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className='text-3xl font-bol mb-5'>Skills</h1>
        <p className=''>This is my Skills and i'm enhanching this skills every day.</p>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 mt-5 my-3'>
            {
                cardItem.map(({id,logo,name}) =>(
                    <div className='flex flex-col items-center justify-center rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                        <img src={logo} className="w-[80x]  p-1 rounded-full  border-[1px]" alt="" />
                        <div>
                            <div className=''>{name}</div>

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

export default Skills
