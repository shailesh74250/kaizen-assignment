import { ButtonProps } from './ButtonProps';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled = false,
  variant = 'primary',
  type = 'button',
  testId 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.btn} ${styles[variant]}`}
      type={type}
      data-testid={testId || `${label}-btn`}
    >
      {label}
    </button>
  );
};

export default Button;
