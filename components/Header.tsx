"use client";

import { useState, useEffect, useRef } from "react";

const Header = () => {
	const [fontSize, setFontSize] = useState(7.5);
	const [showText, setShowText] = useState(false);
	const [videoLoaded, setVideoLoaded] = useState(false); // New state for video load
	const videoRef = useRef<HTMLVideoElement | null>(null);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const scrollY = window.scrollY;
	// 		const newFontSize = Math.max(1.5, 7.5 - scrollY * 0.01);

	// 		setFontSize(newFontSize);
	// 	};

	// 	window.addEventListener("scroll", handleScroll);

	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);

	// useEffect(() => {
	// 	const observer = new IntersectionObserver(
	// 		(entries) => {
	// 			entries.forEach((entry) => {
	// 				if (!entry.isIntersecting) {
	// 					setShowText(true);
	// 				} else {
	// 					setShowText(false);
	// 				}
	// 			});
	// 		},
	// 		{ threshold: 0.128 }
	// 	);

	// 	if (videoRef.current) {
	// 		observer.observe(videoRef.current);
	// 	}

	// 	return () => {
	// 		if (videoRef.current) {
	// 			observer.unobserve(videoRef.current);
	// 		}
	// 	};
	// }, []);

	// Video load handler
	const handleVideoLoaded = () => {
		setVideoLoaded(true); // Set video as loaded
	};

	return (
		<header className="relative min-w-[100dvw] h-[100dvh] overflow-hidden">
			{showText && (
				<div className="fixed top-0 flex justify-center w-full items-center bg-white py-2 shadow-md z-50">
					<p className="font-notoSerifKhitan text-2xl">Scent of a Dream</p>
					<button className="uppercase absolute right-2 md:right-6 grid space-y-1">
						<span className="hidden md:block">menu</span>
						<span className="bg-black w-[20px] h-[1.5px] block md:hidden"></span>
						<span className="bg-black w-[20px] h-[0.5px] block md:hidden"></span>
						<span className="bg-black w-[20px] h-[0.5px] block md:hidden"></span>
					</button>
				</div>
			)}

			<div
				className={`w-full h-full absolute top-0 left-0 z-10 bg-black ${
					videoLoaded ? "hidden" : ""
				}`}
			></div>
		
				<video
					ref={videoRef}
					src={require("../public/perfume_video.mp4")}
					className="top-0 -z-40 fixed   w-full  h-[100dvh] object-cover"
					autoPlay
					muted
					loop
					preload="auto"
					onLoadedData={handleVideoLoaded} // Video load event
				/>
		

			{!showText && (
				<div className="absolute bottom-3 flex justify-center w-full z-30">
					<h1
						className="text-white font-notoSerifKhitan uppercase"
						style={{ fontSize: `${fontSize}vw` }}
					>
						Scent of a Dream
					</h1>
				</div>
			)}
		</header>
	);
};

export default Header;
