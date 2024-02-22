import styles from "./Badge.module.css";

export default function Badge({ children, color, pill }) {

    const badgeCss = [styles.badge, styles[color], pill ? styles['badge-pill'] : ""].join(" ");
    return (
        <span className={badgeCss}>{children}</span>
    );
}

