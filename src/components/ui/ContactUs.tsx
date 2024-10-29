
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from '../../Images/contact.png'
import Swal from 'sweetalert2';

export const ContactUs = () => {
    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e:React.FormEvent) =>{
        e.preventDefault();
        if(form.current){
            emailjs.sendForm(
                'service_8rdtc8c',
                'template_c0roleo',
                form.current,
                'afBcFG5eT5gwM8pm8'
            ).then(
                (result)=>{
                    Swal.fire({
                        icon:'success',
                        title:'Message Sent',
                        text:'Your Message has been sent Successfully',
                        confirmButtonColor:'#4F46E5'
                    });
                },
                (error)=>{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'An error occurred. Please try again later.',
                        confirmButtonColor: '#E53E3E',
                      });
                    console.error('Email Js error',error);
                }
            )
        }
    }

  return (
    <section className='flex justify-center items-center py-10'>
        <div className='bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg shadow-lg p-8 w-full max-w-2xl md:flex'>
            <div className='md:w-1/2'>
                <h2 className='text-lg font-semibold mb-6'>Get in Touch</h2>
                <form action="" className='space-y-4'>
                    <div>
                        <input type="text" placeholder='Your Name' className='w-full p-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400' />
                    </div>
                    <div>
                        <input type="text" placeholder='Email' className='w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400' />
                    </div>
                    <div>
                    <input type="number" placeholder='Contact Number' className='w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400' />
                    </div>
                    <div>
                        <textarea
                        placeholder="Message..."
                        className="w-full p-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 h-24 resize-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-700 text-white py-3 rounded-md hover:bg-gray-600 transition duration-300"
                        >
                             Send Message
                    </button>
                </form>
            </div>
            <div className='md:w-1/2 flex justify-center items-center mt-8 md:mt-0'>
                <img src={contact} alt="contact us" className='max-w-full h-auto' />

            </div>


        </div>

    </section>
  )
}
