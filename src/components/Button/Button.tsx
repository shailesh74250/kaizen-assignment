import { ButtonProps } from './ButtonProps';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled = false,
  className = '',
  type = 'button',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.btn} ${className}`} // Add your own classes if needed
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
