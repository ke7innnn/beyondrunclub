import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.navigation}>
                    <Link href="#home" className={styles.navLink}>Home</Link>
                    <Link href="#event" className={styles.navLink}>Event</Link>
                    <Link href="#past-events" className={styles.navLink}>Past Events</Link>
                    <Link href="#signup" className={styles.navLink}>Sign Up</Link>
                </div>

                <div className={styles.contact}>
                    <span className={styles.contactLabel}>Contact Us</span>
                    <a
                        href="https://instagram.com/beyondrunclub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        @beyondrunclub
                    </a>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className={styles.copyright}>
                    © 2026 Beyond Run Club. All Rights Reserved
                </div>
            </div>
        </footer>
    );
}
