import styles from "./EventSection.module.css";

export default function EventSection() {
    return (
        <section className={styles.container}>
            <h2 className={styles.header}>Upcoming Event</h2>
            <div className={styles.contentWrapper}>
                <div className={styles.imageWrapper}>
                    <img
                        src="/mainevent/IMG_1154.jpg"
                        alt="Upcoming Event"
                        className={styles.image}
                        loading="lazy"
                    />
                </div>
                <div className={styles.detailsWrapper}>
                    <h3 className={styles.eventTitle}>ANTI-VALENTINE PARTY</h3>
                    <p className={styles.eventDescription}>
                        Join us for the crazy decor Live DJ
                    </p>
                    <button className={styles.ctaButton}>Join Now</button>
                </div>
            </div>
        </section>
    );
}
