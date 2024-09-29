"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import loadingImg from "@/public/loading.png";
import "./splashScreen.css"
import FadeInOut from "./FadeInOut";

interface SplashScreenProps {
  finishLoading: () => void;
}

export default function SplashScreen({ finishLoading }: SplashScreenProps) {
  const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {

        const timeout = setTimeout(() => {
          setIsMounted(true); 
          finishLoading(); 
        }, 1000);  
        return () => clearTimeout(timeout);
      }, []);

  return (
    <FadeInOut 
    className="container"
    initial={{opacity: 0,y:10}}
    animate={{opacity: 1,y:0}}
    >
      {!isMounted && (
        <div className=" img-container">
          <Image
            src={loadingImg}
            alt="splash screen"
            fill
            priority={true}
            // sizes="(max-width: 768px) 50vw, (min-width: 769px) 20vw"
          />
        </div>
   )}  
    </FadeInOut>
  );
}
