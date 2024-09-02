import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <hr />
    <footer className='py-12'>
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div className=" flex flex-col items-center justify-center">
                <h1>Available On</h1>
                <div className='flex space-x-4 mt-5'>
                <ul class="flex space-x-5">
                   <li>
                    <a href="https://www.facebook.com/aditya.evans.75?mibextid=ZbWKwL" target='_blank'>
                   <FaFacebook size={24}  />
                   </a>
                   </li>
                   <li>
                   <a href="https://www.linkedin.com/in/aditya-kumar-mandal-72b480289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                    <FaLinkedin size={24} />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.instagram.com/evansaditya9?igsh=MWpwNGo5YXRtcjk0ag==" target='_blank'>
                    <FaInstagramSquare size={24} /></a>
                    </li>
                    <li>
                    <a href="https://x.com/TheAditya777?t=yK18sy6Z0JpwAs1pb1jGCg&s=09" target='_blank'>
                    <FaSquareXTwitter size={24} /></a>
                    </li>
                    </ul>

                   

                </div>
                <div className="mt-8 border-t border-gray-600 pt-8 flex-flex-col items-center">
                    <p className='text-sm'>
                        &copy; 2024 Aditya Kr. Mandal. All rights reserved
                    </p>
                </div>
            </div>

        </div>
    </footer>
    </>
  )
}

export default Footer
