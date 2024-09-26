import React, { HTMLProps, useContext, useEffect, useRef } from "react";
import { TOCContext } from "./TOCContext";
import { useScroll } from "framer-motion";

export const TrackedSection = ({
	isFirst = false,
	isLast = false,
	sectionId,
	sidebarDescription,
	tocTitle,
	...props
}: {
	isFirst?: boolean;
	isLast?: boolean;
	sectionId: number;
	sidebarDescription: string;
	tocTitle: string;
} & HTMLProps<HTMLElement>) => {
	const { registerSection, setActiveSection } = useContext(TOCContext);

	useEffect(() => {
		registerSection({
			id: sectionId,
			title: tocTitle,
			sidebarDescription: sidebarDescription,
		});
	}, []);
	const container = useRef(null);
	// he useScroll hook returns an object containing the scrollYProgress property, which represents the scroll
	// position as a value between 0 and 1
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start center", "end center"],
	});
	
	//scrollYprogress specific for each section
	scrollYProgress.on("change", (value) => {
		// console.log("ScrollYProgress:", value);
		if (value > 0 && value < 1) {
			setActiveSection(sectionId);
			// console.log("id:", sectionId);
		}
		if ((value <= 0 && isFirst) || (value >= 1 && isLast)) {
			setActiveSection(-1);
		}
	});
	return (
		<section
			ref={container} //container that have picture
			id={`section-${sectionId}`} // it is used to scroll to the section that is clicked
			{...props}
		/>
	);
};
