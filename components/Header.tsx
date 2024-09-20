"use client";

import { useState, useEffect, useRef } from "react";

const Header = () => {
	
	const [mobifontSize, setMobiFontSize] = useState(8.5);
	const textRef = useRef<HTMLDivElement | null>(null);
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		// Function to update font size based on screen width and scroll position
		const updateFontSizeAndSticky = () => {
		  requestAnimationFrame(() => {
			const isMobile = window.matchMedia("(max-width: 768px)").matches;
			const scrollY = window.scrollY;
	
			// Font size adjustment
			const newFontSize = Math.max(1.5, 8.5 - scrollY * 0.012);
			const mobiSize = Math.max(5.2, 8.8 - scrollY * 0.008);
			setMobiFontSize(isMobile ? mobiSize : newFontSize);
	
			// Sticky header condition
			if (textRef.current) {
			  const rect = textRef.current.getBoundingClientRect();
			  setIsSticky(rect.top <= 0);
			}
		  });
		};
	
		// Initial update
		updateFontSizeAndSticky();
	
		// Update font size and sticky header on scroll and resize
		window.addEventListener("scroll", updateFontSizeAndSticky);
		window.addEventListener("resize", updateFontSizeAndSticky);
	
		return () => {
		  window.removeEventListener("scroll", updateFontSizeAndSticky);
		  window.removeEventListener("resize", updateFontSizeAndSticky);
		};
	  }, []);



	return (
		<header className="relative  min-w-[100dvw] h-[100vh] overflow-hidden ">
			

			 <video
				src="/preload_video.mp4"
				className="-z-40 fixed w-full h-[100dvh] object-cover"
				muted
				loop
				playsInline
				preload="auto"
			>
				Your browser does not support the video tag.
		   </video>
		 <video
				src="/perfume_video.mp4"
				className=" -z-40 fixed w-full h-[100dvh] object-cover"
				autoPlay
				muted
				loop
				playsInline
			>
				Your browser does not support the video tag.
		   </video>

			<div
				ref={textRef}
				className="absolute bottom-3 flex justify-center w-full "
			>
				<h1
					className="text-white font-notoSerifKhitan uppercase leading-none overflow-hidden"
					style={{ fontSize: `${mobifontSize}vw` }}
				>
					Scent of a Dream
				</h1>
			</div>

			{isSticky && (
				<div className="fixed left-0 top-0 flex justify-center w-full items-start bg-white py-3 shadow-md z-50">
					<p className="font-notoSerifKhitan !leading-none text-2xl mobi:!text-[1.3rem] ">
						Scent of a Dream
					</p>
				</div>
			)}
		</header>
	);
};

export default Header;
