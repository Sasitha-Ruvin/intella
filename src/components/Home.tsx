import React from 'react'
import { HeroSection } from './ui/Hero/HeroSection'
import { Navbar } from './ui/Navbar/Navbar'
import { CardSection } from './ui/CardSection'
import { HeroText } from './ui/HeroText'
import { TechStack } from './ui/TechStack'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <HeroText/>
        <CardSection/>
        <TechStack/>
    </div>
    
  )
}
