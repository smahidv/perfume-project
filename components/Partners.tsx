import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <div className='bg-white'>
      <div className='md:text-4xl text-2xl md:leading-[2.8rem] font-notoSerifKhitan md:px-12 px-6 pt-24'>
        We’re proud to partner <br /> with the best
      </div>
      <div className='flex gap-4 animate-infinite-scroll border-brands py-16 pb-24 '>
      {[...Array(2)].map((_, index) => (
        <>
        <div className='flex-shrink-0 relative w-[150px] h-[65px]'>
          <Image
            src='/partners/Chase.png'
            alt="Chase"
           fill
          
          />
        </div>
        <div className='flex-shrink-0 relative w-[150px] h-[65px] '>
          <Image
            src='/partners/Dior.png'
            alt="Dior"
            fill
          />
        </div>
        <div className='flex-shrink-0 relative w-[150px] h-[65px]'>
          <Image
            src='/partners/Claridges.png'
            alt="Claridges"
            fill
          />
        </div>   
         <div className='flex-shrink-0 relative w-[150px] h-[65px]'>
          <Image
            src='/partners/EPI.png'
            alt="EPI"
            fill
          />
        </div>
        <div className='flex-shrink-0 relative w-[150px] h-[65px]'>
          <Image
            src='/partners/HarveyNichols.png'
            alt="HarveyNichols"
            fill
          />
        </div>
        <div className='flex-shrink-0 relative w-[150px] h-[65px]'>
          <Image
            src='/partners/Liberty.png'
            alt="Liberty"
            fill
          />
        </div>
        <div className='flex-shrink-0 relative w-[150px] h-[65px]'>
          <Image
            src='/partners/NOBLE-PANACEA.png'
            alt="NOBLE-PANACEA"
            fill
          />
        </div>
        <div className='flex-shrink-0  relative w-[150px] h-[65px]'>
          <Image
            src='/partners/Rolex.png'
            alt="Rolex"
            fill
          />
        </div>
        <div className='flex-shrink-0 relative w-[150px] h-[65px]'>
          <Image
            src='/partners/ARC.png'
            alt="ARC"
            fill
          />
        </div>
        </>
      ))}
      </div>
    </div>
  )
}

export default Partners
