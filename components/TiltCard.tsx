'use client';

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "motion/react";
import styles from "./TiltCard.module.css";

const ROTATION_RANGE = 15;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export function TiltCard({ src, alt }: { src: string; alt: string }) {
	const ref = useRef<HTMLDivElement>(null);
	const [hovered, setHovered] = useState(false);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const xSpring = useSpring(x, { stiffness: 100, damping: 15, mass: 0.6 });
	const ySpring = useSpring(y, { stiffness: 100, damping: 15, mass: 0.6 });

	const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;

		const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
		const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

		// Correct tilt direction
		const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
		const rY = mouseX / width - HALF_ROTATION_RANGE;

		x.set(rX);
		y.set(rY);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
		setHovered(false);
	};

	const handleMouseEnter = () => setHovered(true);

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{
				transformStyle: "preserve-3d",
				transform,
			}}
			className={styles.tiltCard}
		>
			<Image
				src="/images/frontpage/background.webp"
				alt="Background"
				width={300}
				height={500}
				quality={100}
				priority
				style={{ objectFit: "cover" }}
			/>
			<motion.div
				style={{
					scale: 1.05,
					transform,
				}}
				className={styles.imageWrapper}
				animate={{
					scale: hovered ? 1.10 : 1.05,
				}}
				transition={{
					type: "spring",
					stiffness: 200,
					damping: 18,
				}}
			>
				<Image
					src={src}
					alt={alt}
					width={1080}
					height={1820}
					quality={100}
					priority
				/>
			</motion.div>
		</motion.div>
	);
}