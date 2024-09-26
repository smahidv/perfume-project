"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Contacts = () => {
  const { scrollYProgress } = useScroll();
  
  // State to store the padding values based on screen size
  const [paddingValues, setPaddingValues] = useState(["0rem","1rem"]);

  // Check screen size and adjust padding for large screens
  useEffect(() => {
    const updatePadding = () => {
      if (window.innerWidth >= 1024) { // lg screen (1024px or larger)
        setPaddingValues(["0rem","3rem"]); // Larger padding for lg screens
      } else {
        setPaddingValues(["0rem","1rem"]); // Default padding for smaller screens
      }
    };

    updatePadding(); // Run on component mount
    window.addEventListener("resize", updatePadding); // Update on resize

    return () => {
      window.removeEventListener("resize", updatePadding); // Cleanup event listener
    };
  }, []);

  const progresspaddingInline = useTransform(scrollYProgress, [0.88, 1], paddingValues);

  return (
    <motion.div 
      className="bg-black  h-[80vh] "
      style={{ paddingInline: progresspaddingInline }}
    >
      <div className="bg-white flex justify-center  h-full rounded-b-3xl">
        <div className="space-y-10 ">
          <div className="relative w-fit mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-10 mx-auto animate-ringing"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
            <span className="absolute rounded-full w-3 h-3 bg-[#f50202] top-0 right-1 animate-dot-fade opacity-0"></span>
          </div>

          <div>
            <p className="md:text-[2.68rem] text-3xl font-notoSerifKhitan  max-w-[20ch] mx-auto leading-normal text-center">
              Stay up to date and never miss out.
            </p>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Your Email Address"
              className="font-sans md:h-14 h-12 md:w-[550px] w-full bg-[#f9f9f9] border-[1px] rounded-md border-[#d8d6d6] p-4 focus:outline-none focus:shadow-lg "
            />
            <button
              type="button"
              className="absolute hover:bg-[#f50202] transition-colors duration-500 rounded-lg px-4 py-2 w-[30%] h-[80%] bg-black text-white top-[50%] -translate-y-[50%] right-2"
            >
              <span className="text-sm font-sans font-semibold">Sign Up</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 h-fit place-content-center px-3 md:px-28 ">
            <div className="flex relative ">
              <div className="size-[45px] absolute z-30 top-0">
                <Image
                  src='/contacts/girl.jpg'
                  alt="girl profile"
                  className="rounded-full border-[3px] border-[#f9f9f9]"
                  fill
                  sizes="40px"
                />
              </div>
              <div className="size-[45px] absolute left-9 top-0 z-20">
                <Image
                  src='/contacts/girlSmile.jpg'
                  alt="girlSmile"
                  className="rounded-full border-[3px] border-[#f9f9f9]"
                  fill
                  sizes="40px"
                />
              </div>
              <div className="size-[45px] absolute left-[4.5rem] top-0 z-10">
                <Image
                  src='/contacts/men.jpg'
                  alt="men"
                  className="rounded-full border-[3px] border-[#f9f9f9]"
                  fill
                  sizes="40px"
                />
              </div>
              <div className="absolute flex justify-center top-0 items-center left-[6.8rem] rounded-full size-[45px] border-[3px] border-[#f9f9f9] bg-black">
                <span className="font-sans text-white text-sm font-semibold">+1k</span>
              </div>
            </div>

            <div className="h-[45px] flex justify-center items-center">
              <span className="whitespace-normal text-center font-sans font-semibold">Join the community</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contacts;
