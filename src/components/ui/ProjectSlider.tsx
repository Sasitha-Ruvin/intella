import React from 'react'
import { Projects } from '../../data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
export const ProjectSlider = () => {
  return (
    <div className="flex flex-col items-center py-12 bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        We at Intella.
      </h2>
      <p className="text-md text-gray-600 mb-8">
        Have worked on multiple large scale projects, want to take a peek?
      </p>

      <Swiper
        modules={[EffectCoverflow]}
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
            rotate:50,
            stretch:0,
            depth:200,
            modifier:1,
            slideShadows:false,
        }}
        className='max-w-screen-lg'
      >
        {Projects.map((project, index)=>(
            <SwiperSlide key={index}>
                  <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-center px-4">{project.description}</p>
                <a href={project.link} className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-sm">
                  Explore Site
                </a>
              </div>
            </div>

            </SwiperSlide>
        ))}

      </Swiper>

    </div>
  )
}