import { ButtonProps } from './ButtonProps';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled = false,
  variant = 'primary',
  type = 'button',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.btn} ${styles[variant]}`}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
