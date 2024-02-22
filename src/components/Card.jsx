import styles from "./Card.module.css";
import Icon from './ui/Icon';
export default function Card({ children, iconInfo }) {

    return (
        <div className={styles.card}>
            {iconInfo && <Icon iconInfo={iconInfo} className={styles.icon} />}

            {children}
        </div>
    );
}

