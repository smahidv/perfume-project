import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

const Footer = () => {
	return (
		<footer className="bg-black  px-12 h-[75vh] relative overflow-hidden ">
     
			<div className="md:grid md:grid-cols-2 h-full">
				<div className=" relative  before:absolute before:z-40 before:h-full before:w-[.1px] before:top-0  before:left-0 before:bg-[#494949]">
					<div className="  relative pt-10 w-[200px] h-[150px] ">
						<Image src="/logo.png" alt="logo" className="object-cover" fill />
					</div>

					<div className="text-white md:flex gap-7 md:items-center">
						<p>©SCENTOFADREAM 2024</p>
						<div className="font-sans text-[0.7rem] relative cursor-pointer">
							Design by SmahiDv
							<span className="absolute bottom-0 w-full h-[1px] left-0 bg-white"></span>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-2 ">
        <div className="space-y-5 pt-20 relative z-20 before:absolute before:z-40 before:h-full before:w-[.1px] before:top-0  before:left-0 before:bg-[#494949]">
						<div>
							<p className="whitespace-normal  text-white h-fit">
								Questions? Write us at{" "}
								<div className="relative w-fit after:absolute after:bottom-0 after:w-full after:h-[1px] after:left-0 after:bg-white">
									hi@ScentOfADream.com
								</div>
							</p>
						</div>
						<div className="flex gap-2">
							<svg
								className="size-[30px] fill-current text-white"
								viewBox="0 0 512 512"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="m305 256c0 27.0625-21.9375 49-49 49s-49-21.9375-49-49 21.9375-49 49-49 49 21.9375 49 49zm0 0" />
								<path d="m370.59375 169.304688c-2.355469-6.382813-6.113281-12.160157-10.996094-16.902344-4.742187-4.882813-10.515625-8.640625-16.902344-10.996094-5.179687-2.011719-12.960937-4.40625-27.292968-5.058594-15.503906-.707031-20.152344-.859375-59.402344-.859375-39.253906 0-43.902344.148438-59.402344.855469-14.332031.65625-22.117187 3.050781-27.292968 5.0625-6.386719 2.355469-12.164063 6.113281-16.902344 10.996094-4.882813 4.742187-8.640625 10.515625-11 16.902344-2.011719 5.179687-4.40625 12.964843-5.058594 27.296874-.707031 15.5-.859375 20.148438-.859375 59.402344 0 39.25.152344 43.898438.859375 59.402344.652344 14.332031 3.046875 22.113281 5.058594 27.292969 2.359375 6.386719 6.113281 12.160156 10.996094 16.902343 4.742187 4.882813 10.515624 8.640626 16.902343 10.996094 5.179688 2.015625 12.964844 4.410156 27.296875 5.0625 15.5.707032 20.144532.855469 59.398438.855469 39.257812 0 43.90625-.148437 59.402344-.855469 14.332031-.652344 22.117187-3.046875 27.296874-5.0625 12.820313-4.945312 22.953126-15.078125 27.898438-27.898437 2.011719-5.179688 4.40625-12.960938 5.0625-27.292969.707031-15.503906.855469-20.152344.855469-59.402344 0-39.253906-.148438-43.902344-.855469-59.402344-.652344-14.332031-3.046875-22.117187-5.0625-27.296874zm-114.59375 162.179687c-41.691406 0-75.488281-33.792969-75.488281-75.484375s33.796875-75.484375 75.488281-75.484375c41.6875 0 75.484375 33.792969 75.484375 75.484375s-33.796875 75.484375-75.484375 75.484375zm78.46875-136.3125c-9.742188 0-17.640625-7.898437-17.640625-17.640625s7.898437-17.640625 17.640625-17.640625 17.640625 7.898437 17.640625 17.640625c-.003906 9.742188-7.898437 17.640625-17.640625 17.640625zm0 0" />
								<path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm146.113281 316.605469c-.710937 15.648437-3.199219 26.332031-6.832031 35.683593-7.636719 19.746094-23.246094 35.355469-42.992188 42.992188-9.347656 3.632812-20.035156 6.117188-35.679687 6.832031-15.675781.714844-20.683594.886719-60.605469.886719-39.925781 0-44.929687-.171875-60.609375-.886719-15.644531-.714843-26.332031-3.199219-35.679687-6.832031-9.8125-3.691406-18.695313-9.476562-26.039063-16.957031-7.476562-7.339844-13.261719-16.226563-16.953125-26.035157-3.632812-9.347656-6.121094-20.035156-6.832031-35.679687-.722656-15.679687-.890625-20.6875-.890625-60.609375s.167969-44.929688.886719-60.605469c.710937-15.648437 3.195312-26.332031 6.828125-35.683593 3.691406-9.808594 9.480468-18.695313 16.960937-26.035157 7.339844-7.480469 16.226563-13.265625 26.035157-16.957031 9.351562-3.632812 20.035156-6.117188 35.683593-6.832031 15.675781-.714844 20.683594-.886719 60.605469-.886719s44.929688.171875 60.605469.890625c15.648437.710937 26.332031 3.195313 35.683593 6.824219 9.808594 3.691406 18.695313 9.480468 26.039063 16.960937 7.476563 7.34375 13.265625 16.226563 16.953125 26.035157 3.636719 9.351562 6.121094 20.035156 6.835938 35.683593.714843 15.675781.882812 20.683594.882812 60.605469s-.167969 44.929688-.886719 60.605469zm0 0" />
							</svg>
							<svg
								className="size-[30px] fill-current text-white"
								viewBox="0 0 195 195"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="Layer_2" data-name="Layer 2">
									<g id="_06.f" data-name="06.f">
										<path d="m97.5 0a97.5 97.5 0 0 0 -97.5 97.5 97.5 97.5 0 0 0 97.5 97.5 97.5 97.5 0 0 0 97.5-97.5 97.5 97.5 0 0 0 -97.5-97.5zm20 79.72v13.71h-12.41v49.69h-19.81v-49.69h-9.2v-13.71h9.2v-5q0-10.85 6.39-16.82t17.93-6a38.85 38.85 0 0 1 9.26 1.24l.06 14.53a17.79 17.79 0 0 0 -4.87-.53q-9 0-9 7.73v4.87z" />
									</g>
								</g>
							</svg>
						</div>
					</div>
					<div className="space-y-10 w-full pt-20 relative z-20 before:absolute before:h-full before:w-[.1px] before:z-30 before:top-0 before:left-0 before:bg-[#494949] after:absolute after:h-full after:w-[.1px] after:top-0 after:right-0 after:bg-[#494949]">
						<p className="text-white">Subscribe to our newsletter</p>
						<div className="relative  w-full ">
							<input
								className="bg-black w-full placeholder:text-[#494949]  hover:placeholder:text-[#aeaeae] focus:none outline-none border-y-[.5px] border-[#494949] text-[#aeaeae] px-4 py-3"
								type="email"
								name="subscribe"
								placeholder="Email"
							/>
							<ArrowRightIcon className="w-4 absolute select-none text-[#494949] right-2 top-[50%] -translate-y-[50%]" />
						</div>
					</div>

					

				</div>

			</div>
      
      <div className="text-[#252525] absolute bottom-0 text-[9.6vw] select-none capitalize font-bold whitespace-nowrap"> scent of a dream</div>
		</footer>
	);
};

export default Footer;
