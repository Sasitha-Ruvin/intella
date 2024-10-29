import React from 'react'
import { testimonials } from '../../data'

export const Testimonials = () => {
  return (
    <section className='bg-gray-800 text-white py-10'>
        <div className='container mx-auto px-4'>
            <h2 className='text-center text-2xl font-semibold mb-6'>What Our Clients Say</h2>
            <div className='flex flex-col md:flex-row justify-center gap-6'>
                {testimonials.map((testimonial,index)=>(
                    <div
                    key={index}
                    className='bg-gray-100 text-gray-800 rounded-lg shadow-lg p-6 text-center w-full max-w-xs transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer'
                    
                    >
                        <div className='flex justify-center mb-4'>
                            {testimonial.image ? (
                                <img src={testimonial.image} alt={testimonial.name} className='w-16 h-16 rounded-full' />
                            ):(<div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-2xl">👤</span>
                              </div>
                            )}
                        </div>
                        <h3  className='font-semibold text-lg'>{testimonial.name}</h3>
                        <p className='italic text-gray-600 mt-2 mb-4'>{testimonial.message}</p>

                    </div>

                ))}

            </div>

        </div>

    </section>
  )
}
