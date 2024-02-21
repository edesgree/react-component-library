import styles from "./Badge.module.css";

export default function Badge({ children, color, pill }) {
    console.log(styles);
    const badgeCss = [styles.badge, styles[color], pill ? styles['badge-pill'] : ""].join(" ");
    return (
        <span className={badgeCss}>{children}</span>
    );
}

