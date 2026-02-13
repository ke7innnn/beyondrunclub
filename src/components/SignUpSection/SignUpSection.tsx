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
                    <svg className={styles.curvedArrow} width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Thick curved path */}
                        <path
                            d="M 15 40 C 50 15, 150 15, 185 40"
                            stroke="white"
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        {/* Bold arrowhead */}
                        <path
                            d="M 185 40 L 172 30 L 177 40 L 172 50 Z"
                            fill="white"
                        />
                    </svg>
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
