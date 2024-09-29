import Image, { StaticImageData } from "next/image";
import starinitial from "@/public/icons/starInitial.png";
import starClicked from "@/public/icons/starClicked.png";
import { useEffect, useState } from "react";
import { TrackedSection } from "./TrackedSection";
import FadeInOut from "@/Utils/FadeInOut";

type SingleDescriptionProps = {
	imageSrc: StaticImageData;
	title: string;
	description: string;
	sidebarDescription: string;
	alt: string;
	idSection: number;
};

type FavorisState = {
	[key: number]: boolean; // structure of an object
};

const SingleDescription: React.FC<SingleDescriptionProps> = ({
	imageSrc,
	title,
	description,
	sidebarDescription,
	alt,
	idSection,
}) => {
	// Initialize state with an empty object
	const [favoris, setFavoris] = useState<FavorisState>({});

	// Function to handle favorite click
	function handleFavoriteClick(id: number) {
		setFavoris((prevState) => {
			const updatedFavoris = {
				...prevState,
				[id]: !prevState[id], // Toggle the favorite status
			};

			// Save the updated state to localStorage
			localStorage.setItem("favoris", JSON.stringify(updatedFavoris));
			return updatedFavoris;
		});
	}

	// Use useEffect to load favoris from localStorage on initial render
	useEffect(() => {
		const storedFavoris = localStorage.getItem("favoris");
		if (storedFavoris) {
			setFavoris(JSON.parse(storedFavoris)); // because data in localStorage is stored as strings
		}
	}, []);

	return (
		<TrackedSection
			sectionId={idSection}
			tocTitle={title}
			sidebarDescription={sidebarDescription}
			isFirst
		>
			<div className="bg-[rgb(245,240,237)] p-4 rounded-3xl shadow-md lg:relative">
				<div className="relative aspect-video">
					<Image
						src={imageSrc}
						alt={alt}
						className="rounded-3xl"
						placeholder="blur"
						sizes="(min-width: 780px) calc(67.48vw - 107px), calc(100vw - 64px)"
						fill
					/>
				</div>
				<FadeInOut
					duration={1}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					className=" lg:py-16 py-8 pb-16 lg:pb-24 lg:grid lg:grid-cols-2 lg:gap-6 lg:grid-flow-col lg:place-content-start"
				>
					<div className="flex justify-between pb-4">
						<h4 className="text-lg lg:max-w-[20ch] font-notoSerifKhitan font-medium lg:text-[1.7rem] self-center lg:self-start">
							{title}
						</h4>
						<div
							onClick={() => handleFavoriteClick(idSection)}
							className="w-8 lg:w-12 aspect-square cursor-pointer lg:absolute lg:left-[50%] lg:-translate-x-[50%] lg:bottom-5"
						>
							{favoris[idSection] ? (
								<Image src={starClicked} alt="favoris filled" />
							) : (
								<Image src={starinitial} alt="favoris initial" />
							)}
						</div>
					</div>
					<p className="text-[var(--paragraph-color)] --font-roboto text-sm lg:text-base lg:max-w-[50ch]">
						{description}
					</p>
				</FadeInOut>
			</div>
		</TrackedSection>
	);
};

export default SingleDescription;
