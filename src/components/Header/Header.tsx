import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>


            {/* Main Navigation */}
            <nav className={styles.mainNav}>
                <div className={styles.leftLogo}>
                    <img
                        src="/run/newleftlogo.png"
                        alt="Left Logo"
                        className={styles.leftLogoImage}
                        width={75}
                        height={75}
                    />
                </div>

                <div className={styles.logo}>
                    <Link href="/">
                        <img
                            src="/logo/490943750_17842214832475138_746859562932600238_n.jpg"
                            alt="Beyond Run Club Logo"
                            className={styles.logoImage}
                            width={120}
                            height={80}
                        />
                    </Link>
                </div>

                <div className={styles.mobileNavLinks}>
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

                <div className={styles.subNavLinks}>
                    <Link href="#event" className={styles.subNavLink}>Upcoming Event</Link>
                    <Link href="#past-events" className={styles.subNavLink}>Past Events</Link>
                    <Link href="#signup" className={styles.subNavLink}>Contact</Link>
                </div>

                <div className={styles.desktopNavLinks}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="#event" className={styles.navLink}>Events</Link>
                    <Link href="#gallery" className={styles.navLink}>Gallery</Link>
                </div>
            </div>
        </header >
    );
}
