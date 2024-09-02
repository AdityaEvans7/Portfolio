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
                <div className='flex space-x-4'>
                <ul class="flex space-x-5">
                   <li>
                    <a href="https://www.facebook.com/aditya.evans.75?mibextid=ZbWKwL" target='_blank'>
                   <FaFacebook size={24}  />
                   </a>
                   </li>
                   <li>
                   <a href="https://www.facebook.com/aditya.evans.75?mibextid=ZbWKwL" target='_blank'>
                    <FaLinkedin size={24} />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.facebook.com/aditya.evans.75?mibextid=ZbWKwL" target='_blank'>
                    <FaInstagramSquare size={24} /></a>
                    </li>
                    <li>
                    <a href="https://www.facebook.com/aditya.evans.75?mibextid=ZbWKwL" target='_blank'>
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
