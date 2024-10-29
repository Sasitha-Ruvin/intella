import web from '../Images/web.png';
import mobile from '../Images/mobile.png';
import graphic from '../Images/graphic.png';


import icon1 from '../Images/Icons/react.png'

import icon2 from '../Images/Icons/tailwind.png'

import icon3 from '../Images/Icons/laraavel.png'

import icon4 from '../Images/Icons/kt.png'
import icon5 from '../Images/Icons/fltuter.png'
import icon6 from '../Images/Icons/mongodb.png'
import firebase from '../Images/Icons/firebase.png'
import illustrator from '../Images/Icons/adobeIllustrator.png'
import ps from '../Images/Icons/adobephotoshop.png'
import canva from "../Images/Icons/canva.png"
import coral from "../Images/Icons/coral.png"

import acw from "../Images/Projects/acw.png"
import shoezzyy from "../Images/Projects/shoezzyy.png"
import valyrian from "../Images/Projects/valyrian.png"
import client1 from '../Images/Clients/afzal.png'
import client2 from '../Images/Clients/acwdirector.jpg'
import { link } from 'fs';

export const Cards = [
    {
        title:"Web Developement",
        imgSrc:web,
        icons:[icon1,icon2,icon3,icon6],
        description:"From simple websites to complex platforms, we build fast, secure, and scalable websites tailored to your business. We deliver intuitive, user-friendly designs with a seamless user experience."

    },
    {
        title:"Mobile Developement",
        imgSrc:mobile,
        icons:[icon4,icon5, icon6, firebase],
        description:"We create mobile apps that stand out in today’s competitive app market. With a focus on performance, usability, and security. Our mobile solutions ensure your customers have the best experience."

    },
    {
        title:"Graphic Designing",
        imgSrc:graphic,
        icons:[illustrator,ps,canva,coral],
        description:"From logos and branding to marketing collateral and UI/UX design, we craft visually stunning graphics that leave a lasting impression and enhance your brand’s presence across all platforms."

    },
]

export const Technologies = [
    {
        name:"react",
        logo:icon1
    },
    {
        name:"tailwind",
        logo:icon2
    },
    {
        name:"laravel",
        logo:icon3
    },
    {
        name:"kotlin",
        logo:icon4
    },
    {
        name:"flutter",
        logo:icon5
    }
]

export const Projects = [
    {
        title:"Advanced Classic White",
        description:"A website made for a Nature Miracles (pvt) Ltd to showcase their products and allow their customers to place orders through the website",
        image:acw,
        link:"https://advancedclassicwhite.vercel.app/"

    },
    {
        title:"Shoezzyy",
        description:"A website made for Shoezzyy for showcase their products and allowing their customers to track their orders through the site, furthermore this allows admins to manage all the products within the website",
        image:shoezzyy,
        link:"https://shoezzyy.com/"

    },
    {
        title:"Valyrian Spice",
        description: "A Website made for a Restaurant",
        image:valyrian,
        link:""

    }
]

export const testimonials = [
    {
        name:"Afzal",
        role:"Owner Shoezzyy",
        message:"I had an amazing experience working with the Intella team who developed my company’s website. The entire process was smooth and seamless, and the final result was incredibly neat and polished, all within a very reasonable budget. The team was friendly, professional, and always ready to accommodate any requests I had. I’m extremely satisfied with the outcome and highly recommend their services!",
        image:client1

    },
    {
        name:"D.J.M Priyangani",
        role:"Managing Director",
        message:"Intella did an outstanding job creating the website for Advanced Classic White. They were incredibly easy to work with, always maintained clear and open communication, and made the entire process very calm and seamless. Their expertise and dedication truly shone through in the final product. We couldn’t be happier with the result and highly recommend Intella for any web development needs!",
        image:client2

    },
]