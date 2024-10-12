import { InputProps } from './InputProps';
import styles from './Input.module.scss';

const Input: React.FC<InputProps> = ({
  className = '',
  disabled = false,
  name = '',
  onChange,
  onKeyDown,
  placeholder = '',
  required = false,
  testId,
  type = 'text',
  value,
}) => {
  return (
    <input
      className={`${styles.input} ${className}`}
      data-testid={testId || `search-input`}
      disabled={disabled}
      name={name}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
    />
  );
};

export default Input;
