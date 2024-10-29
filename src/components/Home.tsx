import React from 'react'
import { HeroSection } from './ui/Hero/HeroSection'
import { Navbar } from './ui/Navbar/Navbar'
import { CardSection } from './ui/CardSection'
import { HeroText } from './ui/HeroText'
import { TechStack } from './ui/TechStack'
import { ProjectSlider } from './ui/ProjectSlider'
import { Testimonials } from './ui/Testimonials'
import { ContactUs } from './ui/ContactUs'
import { Footer } from './ui/Footer'
import { Expertise } from './ui/Expertise'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <HeroText/>
        <CardSection/>
        <TechStack/>
        <ProjectSlider/>
        <Expertise/>
        <Testimonials/>
        <ContactUs/>
        <Footer/>
    </div>
    
  )
}
