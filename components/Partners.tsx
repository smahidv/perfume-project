import Image from "next/image";
import React from "react";
import chase from "@/public/partners/Chase.png";
import dior from "@/public/partners/Dior.png";
import arc from "@/public/partners/ARC.png";
import claridges from "@/public/partners/Claridges.png";
import EPI from "@/public/partners/EPI.png";
import HarveyNichols from "@/public/partners/HarveyNichols.png";
import Liberty from "@/public/partners/Liberty.png";
import NOBLEPANACEA from "@/public/partners/NOBLE-PANACEA.png";
import ROLEX from "@/public/partners/ROLEX.png";
import SKIMS from "@/public/partners/SKIMS.png";

const partners = [
  { src: chase, alt: "Chase" },
  { src: dior, alt: "Dior" },
  { src: arc, alt: "ARC" },
  { src: claridges, alt: "Claridges" },
  { src: EPI, alt: "EPI" },
  { src: HarveyNichols, alt: "Harvey Nichols" },
  { src: Liberty, alt: "Liberty" },
  { src: NOBLEPANACEA, alt: "Noble Panacea" },
  { src: ROLEX, alt: "Rolex" },

];

const Partners = () => {
  return (
    <div className="bg-white">
      <div className="md:text-4xl text-2xl md:leading-[2.8rem] font-notoSerifKhitan md:px-12 px-6 pt-24">
        We’re proud to partner <br /> with the best
      </div>
      <div className="flex gap-4 animate-infinite-scroll border-brands py-16 pb-24">
        {[...Array(2)].map((_, outerIndex) => (
          <div key={outerIndex} className="flex gap-4">
            {partners.map((partner, innerIndex) => (
              <div
                key={innerIndex}
                className="flex-shrink-0 relative w-[150px] h-[65px]"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  placeholder="blur"
                  quality={100}
                  sizes="119px"
                  priority
                  fill
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
