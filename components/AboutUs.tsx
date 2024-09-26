"use client";
import Image from 'next/image';
import React from 'react';
import girlPic from '@/public/171670.jpg';
import FadeInOut from '@/app/Utils/FadeInOut';

const AboutUs = () => {
  // Common animation props to be passed to all FadeInOut components (reducing redundancy )
  const animationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    duration: 1,
  };

  return (
    <div className="grid md:grid-cols-2 auto-rows-[1fr] bg-[rgb(245,240,237)] px-1 lg:px-0">
      {/* Image Section */}
      <FadeInOut {...animationProps} className="relative aspect-square">
        <Image
          src={girlPic}
          alt="girl with flowers"
          quality={100}
          priority
          placeholder="blur"
          className="object-cover"
          sizes="(min-width: 780px) 50vw, (min-width: 360px) 100vw, calc(-270vw + 1274px)"
          fill
        />
      </FadeInOut>

      {/* Text Section */}
      <div className="md:-order-1 flex justify-center items-center h-full">
        <FadeInOut {...animationProps} className="px-10 space-y-8 xl:space-y-20">
          <h2 className="font-notoSerifKhitan  text-center font-medium text-lg xl:text-2xl">
            Born from a <span>passion</span> for artistry and elegance, Scent of a Dream is dedicated to <span>crafting</span> fragrances that <span>inspire</span> and <span>captivate</span>
          </h2>
          <p className=" text-center font-roboto text-sm xl:text-base">
            Our mission is to create scents that resonate with individuality and elegance, each bottle an invitation to a new sensory adventure.
          </p>
        </FadeInOut>
      </div>
    </div>
  );
};

export default AboutUs;
