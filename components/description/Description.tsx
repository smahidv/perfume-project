"use client";
import { useRef } from "react";
import SingleDescription from "./SingleDescription";
import { TOCContext, useTOCContextValues } from "./TOCContext";
import TableOfContent from "./TableOfContent";
import elegance from "@/public/characteristics/elegance.jpg";
import fresh from "@/public/characteristics/fresh.jpg";
import power from "@/public/characteristics/power.jpg";
import FadeInOut from "@/app/Utils/FadeInOut";



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
    sidebarDescription: "Bold and seductive fragrance that commands attention.",
    description:
      "With rich notes of amber, dark chocolate, and a touch of smoky oud, this scent embodies strength and mystery.",
    alt: "power",
  },
];

const Description = () => {
  const { values } = useTOCContextValues();
  const ref = useRef(null); // Create a ref for the section

  return (
    <TOCContext.Provider value={values}>
    <div className="px-2  lg:px-16" ref={ref}>
      <FadeInOut
       duration={1}
       initial={{opacity:0,y:80}}
       animate={{opacity:1,y:0}}
       className="md:py-28 py-10 md:text-6xl text-[1.7rem] font-notoSerifKhitan  overflow-hidden xs:text-3xl md:leading-[5rem] max-w-[75%] font-medium m-auto text-center">
        Crafted for Your Everyday Elegance.
      </FadeInOut>

      <div className="lg:flex lg:gap-[10%] gap-16">
       <TableOfContent
       />
        <div className="lg:w-[75%] space-y-16 lg:space-y-32 ">
          {descriptionData.map((item, index) => (          
            <SingleDescription
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
              alt={item.alt}
              sidebarDescription={item.sidebarDescription}
              idSection={index}
            />
          ))}
        </div>
      </div>
    </div>
    </TOCContext.Provider>
  );
};

export default Description;
