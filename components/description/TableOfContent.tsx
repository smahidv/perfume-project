import { motion, useScroll, useTransform } from "framer-motion";
import { useContext } from "react";
import { TOCContext } from "./TOCContext";

const TableOfContent= () => {
	const { sections, activeSection } = useContext(TOCContext);

	 // Scroll tracking
	const { scrollYProgress } = useScroll();
	const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);




	return (
		<motion.aside 
		className="sticky top-0 w-[25%] h-[100vh] lg:grid grid-flow-col hidden gap-10"
		>
			<div className="h-full w-0.5 bg-neutral-300 rounded-full overflow-hidden">
				<motion.div
					className="bg-neutral-800 w-full origin-bottom"
					style={{ height: progressHeight }}
				/>
			</div>

			<div className="pt-4  space-y-4 md:space-y-12">
				{sections.map(({ id, title,sidebarDescription }) => (
					<div
						key={id}
						className={`cursor-pointer  transition-colors duration-200 ${
							activeSection === id ? "text-neutral-800" : "text-neutral-300"
						}`}
						onClick={() =>
							document
							  .getElementById(`section-${id}`)
							  ?.scrollIntoView({ behavior: "smooth" })
						  }
					>
						<h4 className="capitalize font-medium mb-2 --font-roboto">{title}</h4> 
						<p className="text-[0.8em] --font-roboto">{sidebarDescription}</p>
					</div>
				))}
			</div>
		</motion.aside>
	);
};

export default TableOfContent;
