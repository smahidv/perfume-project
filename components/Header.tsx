"use client";

import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [fontSize, setFontSize] = useState(7.5);
  const [showText, setShowText] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newFontSize = Math.max(1.5, 7.5 - scrollY * 0.01);

      setFontSize(newFontSize);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setShowText(true);
          } else {
            setShowText(false);
          }
        });
      },
      { threshold: 0.128 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <header className="relative min-w-[100dvw] max-h-[100dvh] overflow-hidden">
      {showText && (
        <div className="fixed top-0 flex justify-center  w-full items-center bg-white py-2 shadow-md z-50">
          <p className="font-notoSerifKhitan text-2xl ">Scent of a Dream</p>
          <button className="uppercase absolute right-6 ">
            menu
            </button>
        </div>
      )}
      <video
        ref={videoRef}
        src={require("../public/perfume_video.mp4")}
        className="w-full"
        autoPlay
        muted
        loop
      />
      {!showText && <div className="absolute bottom-3 flex justify-center w-full z-30">
        <h1
          className="text-white font-notoSerifKhitan uppercase"
          style={{ fontSize: `${fontSize}vw` }}
        >
          Scent of a Dream
        </h1>
      </div>}
    </header>
  );
};

export default Header;
