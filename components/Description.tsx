"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import useInViewPort from '@/hooks/useInViewPort';
import elegance from "@/public/characteristics/elegance.jpg"
import fresh from "@/public/characteristics/fresh.jpg"
import power from "@/public/characteristics/power.jpg"


const Description = () => {

  // Create individual refs for each section
  const targetRef1 = useRef<HTMLDivElement>(null);
  const targetRef2 = useRef<HTMLDivElement>(null);
  const targetRef3 = useRef<HTMLDivElement>(null);

  // Use the useInViewPort hook for each ref
  const inViewport1 = useInViewPort(targetRef1, { threshold: 0.1 });
  const inViewport2 = useInViewPort(targetRef2, { threshold: 0.1 });
  const inViewport3 = useInViewPort(targetRef3, { threshold: 0.1 });


  return (
    <div className='bg-[#f2f2f2] px-2 md:mx-0 pb-6'>
      <h3 className='md:py-28 py-20 md:text-6xl text-[2.5rem] leading-[3rem] max-w-[75%] m-auto text-center '>Crafted for Your Everyday Elegance.</h3>
      <div className='md:flex gap-[10%] px-4 lg:px-16'>

        <aside className='sticky top-20 w-[25%] h-[100vh] space-y-8 py-4 pb-14 hidden md:block  after:absolute after:h-[84%] after:w-[1px] after:left-0 after:bg-[#d9d9d9] after:rounded-md after:top-0'>
          <div
            ref={targetRef1}
            className={`py-6 pl-9 relative cursor-pointer group transition-colors duration-300 ${inViewport1 ? 'hover' : ''}`}
          >
            <span
              className={`absolute z-40 w-[1px] bg-black h-full left-0 -top-4 transition-opacity duration-200 ${inViewport1 ? 'opacity-100' : 'opacity-0'}`}
            ></span>
            <h4 className={`capitalize text-[#999999] group-hover:text-black ${inViewport1 ? 'text-black' : ''}`}>
              Whispering Silk
            </h4>
            <p className={`text-[0.8em] text-[#b9b8b8] leading-6 ${inViewport1 ? 'text-[var(--paragraph-color)]' : ''}`}>
              The epitome of grace and refinement with creamy vanilla and a hint of sandalwood.
            </p>
          </div>

          <div
            ref={targetRef2}
            className={`py-6 pl-9 relative cursor-pointer group transition-colors duration-300 ${inViewport2 ? 'hover' : ''}`}
          >
            <span
              className={`absolute z-40 w-[1px] bg-black h-full left-0 top-0 transition-opacity duration-200 ${inViewport2 ? 'opacity-100' : 'opacity-0'}`}
            ></span>
            <h4 className={`capitalize text-[#999999] group-hover:text-black ${inViewport2 ? 'text-black' : ''}`}>
              Morning Dew
            </h4>
            <p className={`text-[0.8em] text-[#b9b8b8] leading-6 ${inViewport2 ? 'text-[var(--paragraph-color)]' : ''}`}>

              This invigorating fragrance combines the zest of citrus with refreshing notes of green tea and a hint of jasmine.
            </p>
          </div>

          <div
            ref={targetRef3}
            className={`py-6 pl-9 relative cursor-pointer group transition-colors duration-300 ${inViewport3 ? 'hover' : ''}`}
          >
            <span
              className={`absolute z-40 w-[1px] bg-black h-full left-0 top-0 transition-opacity duration-200 ${inViewport3 ? 'opacity-100' : 'opacity-0'}`}
            ></span>
            <h4 className={`capitalize text-[#999999] group-hover:text-black ${inViewport3 ? 'text-black' : ''}`}>
              Velvet Ember
            </h4>
            <p className={`text-[0.8em] text-[#b9b8b8] leading-6 ${inViewport3 ? 'text-[var(--paragraph-color)]' : ''}`}>
              bold and seductive fragrance that commands attention.
            </p>
          </div>
        </aside>


        <div className='md:w-[75%] '>
          <div>
            <div
              ref={targetRef1}
              className='relative aspect-video'>
              <Image
              placeholder='blur'
                src={elegance}
                alt="elegance"
                sizes="(min-width: 780px) calc(67.48vw - 107px), calc(100vw - 64px)"
                className='rounded-3xl'
                fill
              />
            </div>
            <div className=' py-12 md:pb-40   md:grid md:grid-cols-2 md:gap-6 md:grid-flow-col   '>
              <h4
                className='text-3xl leading-10 md:max-w-[20ch] pb-6'>
                Whispering Silk is the epitome of grace and refinement.</h4>
              <p className='text-[var(--paragraph-color)] leading-7  md:max-w-[50ch]'>
                This elegant fragrance blends soft white florals with creamy vanilla and a hint of sandalwood, creating a timeless and sophisticated scent. Ideal for those who seek to exude an air of quiet confidence and poise.
              </p>
            </div>
          </div>

          <div>

            <div
              ref={targetRef2}
              className='relative aspect-video'>
              <Image
                src={fresh}
                alt="fresh"
                className='rounded-3xl '
                 placeholder='blur'
                sizes="(min-width: 780px) calc(67.48vw - 107px), calc(100vw - 64px)"

                fill
              />
            </div>


            <div className='py-12 pb-36  md:grid md:grid-cols-2 md:gap-6 md:grid-flow-col  '>
              <h4 className='text-3xl leading-10 md:max-w-[20ch] pb-6'>Morning Dew captures the crisp freshness of a new day.</h4>
              <p className='text-[var(--paragraph-color)] leading-7  md:max-w-[50ch]' >This invigorating fragrance combines the zest of citrus with refreshing notes of green tea and a hint of jasmine. Perfect for those who embrace each day with energy and optimism.</p>
            </div>

          </div>

          <div
            ref={targetRef3}>
            <div className='relative aspect-video'>
              <Image
                src={power}
                alt="power"
                className='rounded-3xl'
                placeholder="blur"
                sizes="(min-width: 780px) calc(67.48vw - 107px), calc(100vw - 64px)"             
                fill
              />
            </div>
            <div className='py-12 pb-36  md:grid md:grid-cols-2 md:gap-6 md:grid-flow-col '>
              <h4 className='text-3xl leading-10 md:max-w-[20ch] pb-6'>Velvet Ember is a bold and seductive fragrance that commands attention. </h4>
              <p className='text-[var(--paragraph-color)] leading-7  md:max-w-[50ch]'>With rich notes of amber, dark chocolate, and a touch of smoky oud, this scent embodies strength and mystery. Ideal for those who make a powerful impression wherever they go.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Description