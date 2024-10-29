import React from 'react'
import { speciality } from '../../data'

export const Expertise = () => {
  return (
    <div className='bg-gray-50 py-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 text-center'>
            {speciality.map((item,index)=>(
                <div key={index} className='flex flex-col items-center'>
                    <img src={item.icon} alt={item.title} className='w-16 h-16 mb-4' />
                    <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                    <p className='text-gray-600'>{item.description}</p>
                </div>
            ))}

        </div>
        
    </div>
  )
}
