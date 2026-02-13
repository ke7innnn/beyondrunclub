import styles from "./SignUpSection.module.css";

export default function SignUpSection() {
    return (
        <section className={styles.section}>
            <div className={styles.contentContainer}>
                <div className={styles.leftSide}>
                    <img
                        src="/logo/490943750_17842214832475138_746859562932600238_n.jpg"
                        alt="Beyond Run Club Logo"
                        className={styles.logoImage}
                        loading="lazy"
                    />
                </div>
                <div className={styles.arrowContainer}>
                    <img
                        src="/arrow/erasebg-transformed.png"
                        alt="Join Arrow"
                        className={styles.arrowImage}
                        width={200}
                        height={80}
                    />
                </div>
                <a
                    href="https://instagram.com/beyondrunclub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaButton}
                >
                    Sign up for our next event
                </a>
            </div>
        </section>
    );
}
