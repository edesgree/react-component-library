import styles from "./Banner.module.css";

export default function Banner({ title, body, type }) {

    const bannerCss = [styles.banner, type ? styles[type] : ""].join(" ");
    return (
        <div className={bannerCss}>
            {title &&
                <span className={styles.title}>{title}</span>
            }
            {body &&
                <p>{body}</p>
            }
        </div>
    );
}

