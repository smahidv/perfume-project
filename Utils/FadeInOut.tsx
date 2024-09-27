import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

type FadeInOutProps = {
	children: React.ReactNode;
	className?: string;
	duration?: number;
	once?: boolean;
	transition?: object;
	exit?: object;
	animate?: object;
	initial?: object;
};

const FadeInOut: React.FC<FadeInOutProps> = ({
	children,
	duration = 0.5,
	once = true,
	className,
	initial = { opacity: 0 },
	animate = { opacity: 1 },
	exit = { opacity: 0 },
	transition = { duration },
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once });

	return (
		<motion.div
			ref={ref}
			initial={initial}
			animate={isInView ? animate : exit}
			transition={transition}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default FadeInOut;
