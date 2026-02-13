"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./PastEventsSection.module.css";

const images = [
    "IMG_1155.jpg", "IMG_1156.jpg", "IMG_1157.jpg", "IMG_1158.jpg",
    "IMG_1159.jpg", "IMG_1161.jpg", "IMG_1165.jpg", "IMG_1170.jpg"
];

function Card({ src, index, containerRef }: { src: string; index: number; containerRef: React.RefObject<HTMLDivElement | null> }) {
    const ref = useRef<HTMLDivElement>(null);

    // Track horizontal scroll progress of the card through the container
    const { scrollXProgress } = useScroll({
        target: ref,
        container: containerRef, // Critical: Track relative to the scroll container
        offset: ["start end", "end start"],
        axis: "x"
    });

    // Create an arc: Scale up in center, move up in center (y=0), down at edges (y=50)
    // Scale up in center, keep y flat, no rotation, full opacity
    // Progress 0 (entering right) -> scale: 0.8
    // Progress 0.5 (center) -> scale: 1.2
    // Progress 1 (leaving left) -> scale: 0.8
    const y = useTransform(scrollXProgress, [0, 0.5, 1], [0, 0, 0]);
    const scale = useTransform(scrollXProgress, [0, 0.5, 1], [0.8, 1.3, 0.8]); // Slightly stronger scale for effect
    const zIndex = useTransform(scrollXProgress, [0, 0.5, 1], [1, 10, 1]);

    return (
        <div className={styles.cardWrapper} ref={ref}>
            <motion.div
                className={styles.card}
                style={{ y, scale, zIndex }}
            >
                <img src={`/past events/${src}`} alt={`Past Event ${index + 1}`} className={styles.image} loading="lazy" />
            </motion.div>
        </div>
    );
}

export default function PastEventsSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className={styles.section}>
            <h2 className={styles.header}>Past Events</h2>
            <div className={styles.carouselContainer} ref={containerRef}>
                {images.map((src, index) => (
                    <Card key={index} src={src} index={index} containerRef={containerRef} />
                ))}
            </div>
        </section>
    );
}
