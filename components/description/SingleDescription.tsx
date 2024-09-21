
import Image, { StaticImageData } from "next/image";
import starinitial from "@/public/icons/starInitial.png";
import starClicked from "@/public/icons/starClicked.png";
import { useState } from "react";

type SingleDescriptionProps = {
	imageSrc: StaticImageData;
	title: string;
	description: string;
	alt: string;
	isInViewport: boolean;
	targetRef: React.RefObject<HTMLDivElement>;
};

const SingleDescription: React.FC<SingleDescriptionProps> = ({
	imageSrc,
	title,
	description,
	alt,
	targetRef,
}) => {
	const [favoris, setFavoris] = useState(false);

	const handleFavoriteClick = () => {
		setFavoris((prevState) => !prevState);
	};

	return (
		<div className="bg-[rgb(245,240,237)] p-4 rounded-3xl shadow-md md:relative">
			<div ref={targetRef} className="relative aspect-video">
				<Image
					src={imageSrc}
					alt={alt}
					className="rounded-3xl"
					placeholder="blur"
					sizes="(min-width: 780px) calc(67.48vw - 107px), calc(100vw - 64px)"
					fill
				/>
			</div>

			<div className=" md:py-16 py-8 pb-16 md:pb-24 md:grid md:grid-cols-2 md:gap-6 md:grid-flow-col md:place-content-start">
				<div className="flex justify-between  pb-4 ">
					<h4 className="text-lg md:max-w-[20ch] font-semibold md:text-2xl self-center md:self-start">{title}</h4>
					<div 
						onClick={handleFavoriteClick}
						className=" w-8 md:w-12  aspect-square cursor-pointer md:absolute md:left-[50%] md:-translate-x-[50%] md:bottom-5"
					>
						{favoris ? (
							<Image src={starClicked} alt="favoris filled"  />
						) : (
							<Image src={starinitial} alt="favoris initial" />
						)}
					</div>
				</div>
				<p className="text-[var(--paragraph-color)] text-sm md:text-base md:max-w-[50ch]">
					{description}
				</p>
			</div>
		</div>
	);
};

export default SingleDescription;
