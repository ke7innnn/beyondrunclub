import styles from "./FeatureSection.module.css";

interface FeatureCardProps {
    imageSrc: string;
    title: string;
    ctaText: string;
}

function FeatureCard({ imageSrc, title, ctaText }: FeatureCardProps) {
    return (
        <div className={styles.card}>
            <img src={imageSrc} alt={title} className={styles.image} />
            <div className={styles.content}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <button className={styles.cardButton}>{ctaText}</button>
            </div>
        </div>
    );
}

interface FeatureSectionProps {
    title: string;
}

export default function FeatureSection({ title }: FeatureSectionProps) {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.grid}>
                <FeatureCard
                    imageSrc="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_906,c_limit/8a5099c1-412e-4404-b903-8822080df75b/nike-running.jpg"
                    title="Daily Running"
                    ctaText="Shop"
                />
                <FeatureCard
                    imageSrc="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_906,c_limit/5e875185-3006-4074-850d-45229be135d4/nike-running.jpg"
                    title="Trail Running"
                    ctaText="Shop"
                />
            </div>
        </section>
    );
}
