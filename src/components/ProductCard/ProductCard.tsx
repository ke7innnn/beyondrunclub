import styles from "./ProductCard.module.css";

interface ProductCardProps {
    name: string;
    category: string;
    price: string;
    imageSrc: string;
}

export default function ProductCard({ name, category, price, imageSrc }: ProductCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={imageSrc} alt={name} className={styles.productImage} />
            </div>
            <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.category}>{category}</p>
                <p className={styles.price}>{price}</p>
            </div>
        </div>
    );
}
