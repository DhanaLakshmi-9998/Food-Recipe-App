import React from 'react'
import banner1 from '../assets/banner1.jpeg'
import banner2 from '../assets/banner2.jpeg'
import banner3 from '../assets/banner3.jpeg'
import banner4 from '../assets/banner4.webp'
import banner5 from '../assets/banner5.webp'


const images=[banner1, banner2, banner3, banner4, banner5]
const Header = ({title,image, type}) => {
  return (
    <div className='w-full h-[50vh]'>
        <div className="relative w-full h-full">
            <img src={image ?? images[Math.floor(Math.random()* images.length)]} alt='recipes' className='w-full h-[50vh] object-cover'/>
        </div>
        <div className="absolute w-full h-[50vh] bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-30 2xl:pt-20 px-4">
            <h1 className='text-white text-4xl md:text-5xl font-bold text-center'>{title}</h1>
            {
                type && (
                    <p className="text-md bg-zinc-900 opacity-70 p-2 rounded-lg text-center text-yellow-300 max-[700px]:flex max-[700px]:flex-col font-mono text-lg">
                        Welcome to my food world!! <span> where flavors come alive and every dish tells a story.</span>
                    </p>
                )
            }
        </div>
      
    </div>
  )
}

export default Header
