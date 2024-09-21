import Image from 'next/image'
import React from 'react'
import girlPic from '@/public/171670.jpg'

const AboutUs = () => {
  return (
    <div className='grid md:grid-cols-2 auto-rows-[1fr]  '>
      <div className='relative aspect-square'>
        <Image
          src={girlPic}
          alt="girl with flowers"
          quality={100} 
          priority
          placeholder="blur"
          className=' object-cover'
        sizes="(min-width: 780px) 50vw, (min-width: 360px) 100vw, calc(-270vw + 1274px)"
          fill
        />
      </div>
      <div className='md:-order-1 flex justify-center items-center bg-[rgb(237,237,238)] h-full'>
        <div className='  px-10 space-y-10  md:space-y-20'>
          <h2 className='font-notoSerifKhitan text-center text-xl md:text-2xl'>
            Born from a <span>passion</span> for artistry and elegance, Scent of a Dream is dedicated to <span>crafting</span> fragrances that <span>inspire</span>  and <span>captivate</span>
          </h2>
          <p className='font-notoSerifKhitan text-center'>
            Our mission is to create scents that resonate with individuality and elegance, each bottle an invitation to a new sensory adventure.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs