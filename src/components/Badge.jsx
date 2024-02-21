import "./badge.css";

export default function Badge({ children, color }) {
    return (
        <span className={`badge ${color}`}>{children}</span>
    )
}

