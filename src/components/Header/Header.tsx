import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            {/* Top Bar */}
            <div className={styles.topBar}>
                <div className={styles.topBarLeft}>
                    {/* Placeholder for top left content if needed */}
                </div>
                <div className={styles.topBarRight}>
                    <Link href="#" className={styles.topBarLink}>Start a Run</Link>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className={styles.mainNav}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img
                            src="/logo/490943750_17842214832475138_746859562932600238_n.jpg"
                            alt="Beyond Run Club Logo"
                            className={styles.logoImage}
                            width={80}
                            height={80}
                        />
                    </Link>
                </div>

                <div className={styles.navLinks}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="#event" className={styles.navLink}>Events</Link>
                    <Link href="#gallery" className={styles.navLink}>Gallery</Link>
                </div>

                <div className={styles.navIcons}>
                    <a href="https://instagram.com/beyondrunclub" target="_blank" rel="noopener noreferrer" className={styles.reachOutBtn}>
                        Reach Out
                    </a>
                </div>
            </nav>

            {/* Sub Nav */}
            <div className={styles.subNav}>
                <h2 className={styles.subNavTitle}>CHECK OUT</h2>
                <div className={styles.subNavLinks}>
                    <Link href="#event" className={styles.subNavLink}>Upcoming Run</Link>
                    <Link href="#past-events" className={styles.subNavLink}>Past Runs</Link>
                    <Link href="#signup" className={styles.subNavLink}>Contact</Link>
                </div>
            </div>
        </header>
    );
}
