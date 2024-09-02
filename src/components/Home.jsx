import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiAndroidstudio } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { ReactTyped,Typed } from "react-typed";
import mypic from "../../public/mypic.png"


function Home() {
  return (
    <>
    <div name="Home" 
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
      <span className="text-xl">Welcome in My Feed</span>   
      <div className="flex space-x- 1 text-2xl md:text-4xl">
      <h1>Hello, I'm a</h1>
      {/*<span className="text-red-700 font-bold">Developer</span>*/}
      <ReactTyped className="text-yellow-300 font-bold"
          strings={[" Web Developer","n UI Designer","n Android Developer"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
      </div>
      <br />
      <p className='text-sm md:text-md text-justify'>I'm a Smart working engineering student specialized in Computer science and Engineering.I completed HTML, CSS, JavaScript, Reactjs, NodeJS, Bootstrap  and various technologies.I  developed various types of projects like(BookStore website, eCommerce website, Shoppping website..etc).Along with these skills i am also woking on ANDROID STUDIO.</p><br />
      <div class="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
      <div className='space-y-2'>
        <h1 className='font-bold text-center'>Available on</h1>
       <ul class="flex space-x-5">
        <li>
           <a href="https://www.facebook.com/aditya.evans.75?mibextid=ZbWKwL" target="_blank">
            <FaFacebook className='text-2xl cursor-pointer' /></a>
        </li>
          
        <li>
            <a href="https://www.linkedin.com/in/aditya-kumar-mandal-72b480289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <FaLinkedin className='text-2xl cursor-pointer' /></a>
        </li>
        <li>
            <a href="https://www.instagram.com/evansaditya9?igsh=MWpwNGo5YXRtcjk0ag==" target="_blank">
            <FaInstagramSquare className='text-2xl cursor-pointer' /></a>
        </li>
        <li>
            <a href="https://x.com/TheAditya777?t=yK18sy6Z0JpwAs1pb1jGCg&s=09"
            target="_blank">
            <FaSquareXTwitter className='text-2xl cursor-pointer' /></a>
        </li>
       </ul>
      </div>
      <div className='space-y-2'>
      <h1 className='font-bold text-center'>Currently working on</h1>
       <div class="flex space-x-5">
       <SiAndroidstudio className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
       <IoLogoFigma className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
       <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
       <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
       <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
       <IoLogoNodejs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />

       </div>
      </div>
      </div>
      </div>
      
      <div className="md:w-1/2 md:ml-48 md:mt-15 order-1">
      <img src={mypic} className="rounded-full md:w-[550px] md:h-[550px]" alt="" />
      </div>
      </div>
      
      </div>
      <hr />
    </>
  )
}

export default Home
