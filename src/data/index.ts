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