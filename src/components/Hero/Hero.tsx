import styles from "./Hero.module.css";

interface HeroProps {
    type: "video" | "image" | "split";
    src: string;
    secondarySrc?: string;
    title: string;
    subtitle: string;
    ctaText1?: string;
    ctaText2?: string;
}

export default function Hero({ type, src, secondarySrc, title, subtitle, ctaText1, ctaText2 }: HeroProps) {
    return (
        <section className={`${styles.hero} ${type === "split" ? styles.heroSplit : ""}`}>
            {type === "split" ? (
                <div className={styles.splitLayout}>
                    <div className={styles.leftHalf}>
                        <video className={styles.video} autoPlay loop muted playsInline preload="metadata">
                            <source src={src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className={styles.rightHalf}>
                        {secondarySrc && <img className={styles.image} src={secondarySrc} alt="Hero Right" loading="eager" />}
                    </div>
                </div>
            ) : (
                <div className={styles.backgroundMedia}>
                    {type === "video" ? (
                        <video className={styles.video} autoPlay loop muted playsInline preload="metadata">
                            <source src={src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img className={styles.image} src={src} alt="Hero Background" loading="eager" />
                    )}
                </div>
            )}

            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
                {(ctaText1 || ctaText2) && (
                    <div className={styles.ctaContainer}>
                        {ctaText1 && <button className={styles.ctaButton}>{ctaText1}</button>}
                        {ctaText2 && <button className={styles.ctaButton}>{ctaText2}</button>}
                    </div>
                )}
            </div>
        </section>
    );
}
