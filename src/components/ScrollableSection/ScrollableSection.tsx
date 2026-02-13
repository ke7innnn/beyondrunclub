import styles from "./ScrollableSection.module.css";
import React from "react";

interface ScrollableSectionProps {
    title: string;
    children: React.ReactNode;
}

export default function ScrollableSection({ title, children }: ScrollableSectionProps) {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                {/* Navigation arrows (prev/next) can be added here */}
            </div>
            <div className={styles.scrollContainer}>
                {children}
            </div>
        </section>
    );
}
