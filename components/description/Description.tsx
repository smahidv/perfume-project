"use client";
import React, { useRef } from "react";
import useInViewPort from "@/hooks/useInViewPort";
import SingleDescription from "./SingleDescription";
import elegance from "@/public/characteristics/elegance.jpg";
import fresh from "@/public/characteristics/fresh.jpg";
import power from "@/public/characteristics/power.jpg";

const descriptionData = [
  {
    imageSrc: elegance,
    title: "Whispering Silk",
    sidebarDescription:
      "The epitome of grace and refinement with creamy vanilla and a hint of sandalwood.",
    description:
      "This elegant fragrance blends soft white florals with creamy vanilla and a hint of sandalwood, creating a timeless and sophisticated scent.",
    alt: "elegance",
  },
  {
    imageSrc: fresh,
    title: "Morning Dew",
    sidebarDescription:
      "This invigorating fragrance combines the zest of citrus with refreshing notes of green tea and a hint of jasmine.",
    description:
      "This invigorating fragrance combines the zest of citrus with refreshing notes of green tea and a hint of jasmine.",
    alt: "fresh",
  },
  {
    imageSrc: power,
    title: "Velvet Ember",
    sidebarDescription:
      "Bold and seductive fragrance that commands attention.",
    description:
      "With rich notes of amber, dark chocolate, and a touch of smoky oud, this scent embodies strength and mystery.",
    alt: "power",
  },
];

const Description = () => {
  const targetRefs = descriptionData.map(() => useRef<HTMLDivElement>(null));
  const inViewports = targetRefs.map((ref) =>
    useInViewPort(ref, { threshold: 0.1 })
  );

  return (
    <div className="px-2 md:mx-0 pb-4">
      <h3 className="md:py-28 py-10 md:text-6xl text-2xl xs:text-3xl  md:leading-[5rem]  max-w-[75%] font-medium  m-auto text-center">
        Crafted for Your Everyday Elegance.
      </h3>

      <div className="md:flex gap-[10%] lg:px-16">
        <aside className="sticky top-20 w-[25%] h-[100vh] space-y-8 py-4 pb-14 hidden md:block after:absolute after:h-[84%] after:w-[1px] after:left-0 after:bg-[#d9d9d9] after:rounded-md after:top-0">
          {descriptionData.map((item, index) => (
            <div
              key={index}
              ref={targetRefs[index]}
              className={`py-6 pl-9 relative cursor-pointer group transition-colors duration-300 ${
                inViewports[index] ? "hover" : ""
              }`}
            >
              <span
                className={`absolute z-40 w-[1px] bg-black h-full left-0 top-0 transition-opacity duration-200 ${
                  inViewports[index] ? "opacity-100" : "opacity-0"
                }`}
              ></span>
              <h4
                className={`capitalize text-[#999999] group-hover:text-black ${
                  inViewports[index] ? "text-black" : ""
                }`}
              >
                {item.title}
              </h4>
              <p
                className={`text-[0.8em] text-[#b9b8b8] leading-6 ${
                  inViewports[index] ? "text-[var(--paragraph-color)]" : ""
                }`}
              >
                {item.sidebarDescription}
              </p>
            </div>
          ))}
        </aside>

        <div className="md:w-[75%] space-y-16 md:space-y-32">
          {descriptionData.map((item, index) => (
            <SingleDescription
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
              alt={item.alt}
              isInViewport={inViewports[index]}
              targetRef={targetRefs[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
