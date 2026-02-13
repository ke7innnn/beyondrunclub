import styles from "./MapSection.module.css";

export default function MapSection() {
    return (
        <section className={styles.container}>
            <a
                href="https://www.google.com/maps/place/Vasai,+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
            >
                <div className={styles.mapBackground}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60458.77777777778!2d72.8!3d19.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aa4d8f3e3e3d%3A0x3e3e3e3e3e3e3e3e!2sVasai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                        className={styles.mapIframe}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Vasai, Maharashtra Map"
                    />
                </div>
                <div className={styles.overlay}>
                    <h2 className={styles.text}>
                        BORN IN VASAI
                    </h2>
                </div>
            </a>
        </section>
    );
}
