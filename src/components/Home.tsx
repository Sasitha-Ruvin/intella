import React from 'react'
import { HeroSection } from './ui/HeroSection'
import { Navbar } from './ui/Navbar/Navbar'
import { CardSection } from './ui/CardSection'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CardSection/>
    </div>
    
  )
}
