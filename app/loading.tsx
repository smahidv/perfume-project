"use client";
import loadingImg from "@/public/loading.png";
import Image from "next/image";

export default function Loading() {
	return (
		<div
			className="h-screen flex justify-center items-center"
		>
			<div className="relative  size-[200px] md:size-[400px]  aspect-square">
				<Image
					src={loadingImg}
					alt="loading"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
				/>
			</div>
		</div>
	);
}
