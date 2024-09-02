import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"
function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = async (data) => {
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try{
            await axios.post("https://getform.io/f/anlezgra",userInfo)
            toast.success("Your message has been sent!")
        } catch(error){
            console.log(error);
            toast.error("Something went wrong")

        }
      }
  return (
    <>
    <div name="Contacts" 
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <span>Please out the form below to contact</span>
        <div className="flex flex-col items-center justify-center mt-5">
            <form 
            onSubmit={handleSubmit(onSubmit)}
             //action="https://getform.io/f/anlezgra"
             //method="POST"
             className='bg-slate-200 w-100 px-8 py-6 rounded-xl'>
                <h1 className="text-xl font-semibold mb-4 block text text-black">Send your message</h1>
                <div className='flxe flex-col mb-4'>
                    <label className="px-2 block text text-black">
                        FullName</label>
                        <input
                        {...register("name", { required: true })}
                         className="shadow rounded-lg apperance-none border py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="name" name='name' type="text" placeholder="Enter your Full Name"/>
                         {errors.name && <span>This field is required</span>}
                </div>
                <div className='flxe flex-col mb-4'>
                    <label className="px-2 block text text-black">
                        Email</label>
                        <input
                        {...register("email", { required: true })}
                         className="shadow rounded-lg apperance-none border py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="email" name='email' type="email" placeholder="Enter your Email"/>
                         {errors.email && <span>This field is required</span>}
                </div>
                <div className='flxe flex-col mb-4'>
                    <label className="px-2 block  text-black">
                        Message</label>
                        <textarea
                        {...register("message", { required: true })}
                         className="shadow rounded-lg apperance-none border py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="email" name="message" type="email" placeholder="Write your message here.."/>
                         {errors.message && <span>This field is required</span>}
                </div>
                <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
                
            </form>
        </div>

    </div>
    </>
  )
}

export default Contact
