import iconDanger from '../../assets/icon-danger.svg';
import iconDefault from '../../assets/icon-default.svg';
import iconSuccess from '../../assets/icon-success.svg';
import iconUpload from '../../assets/icon-upload.svg';
import iconWarning from '../../assets/icon-warning.svg';

// Map icon types to their corresponding imports
const iconMap = {
    danger: iconDanger,
    upload: iconUpload,
    success: iconSuccess,
    warning: iconWarning,
    default: iconDefault,
    // Add more icon types and their imports as needed
};
export default function Icon({ children, iconInfo, className }) {

    // Dynamically access the imported icon based on icon type
    const IconComponent = iconMap[iconInfo.type];
    return (
        <span className={`icon ${iconInfo.color} ${className}`}>
            {children}
            {iconInfo.type && <img src={IconComponent} alt={iconInfo.type} />}

        </span>
    );
}

