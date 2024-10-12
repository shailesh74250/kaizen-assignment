import { InputProps } from './InputProps';
import styles from './Input.module.scss';

const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  onKeyDown,
  placeholder = '',
  disabled = false,
  className = '',
  name = '',
  required = false,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      disabled={disabled}
      className={`${styles.input} ${className}`}
      name={name}
      required={required}
    />
  );
};

export default Input;
