import { CSSProperties } from "react";
import styles from "./GridSection.module.css";

interface GridItem {
    id: number;
    imageSrc: string;
    title: string;
    ctaText: string;
    style?: CSSProperties;
}

const items: GridItem[] = [
    { id: 1, imageSrc: "/images/Gemini_Generated_Image_1h7ejn1h7ejn1h7e.png", title: "Latest Drops", ctaText: "Shop", style: { objectPosition: "top" } },
    { id: 2, imageSrc: "/images/Gemini_Generated_Image_kpur26kpur26kpur.png", title: "Member Exclusive", ctaText: "Shop", style: { objectPosition: "top" } },
    { id: 3, imageSrc: "/images/Gemini_Generated_Image_sf37zusf37zusf37.png", title: "Best Sellers", ctaText: "Shop", style: { objectPosition: "top" } },
    { id: 4, imageSrc: "/images/new.png", title: "Running Gear", ctaText: "Shop", style: { objectPosition: "top" } },
    { id: 5, imageSrc: "/images/IMG_1163%203.jpg", title: "New Arrivals", ctaText: "Shop", style: { objectPosition: "0% 35%" } },
];

interface GridSectionProps {
    title: string;
}

export default function GridSection({ title }: GridSectionProps) {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.grid}>
                {items.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <img
                            src={item.imageSrc}
                            alt={item.title}
                            className={styles.image}
                            style={item.style}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
