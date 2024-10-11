// src/components/Input.tsx
import './Input.scss'
interface InputProps {
  type?: string;              // Input type (e.g., text, password, etc.)
  value: string;              // Value of the input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Function to call on change
  placeholder?: string;       // Placeholder text
  disabled?: boolean;         // Optional prop to disable the input
  className?: string;         // Optional prop for additional CSS classes
  name?: string;              // Name of the input for form handling
  required?: boolean;         // Optional prop to mark the input as required
}

const Input: React.FC<InputProps> = ({
  type = 'text',              // Default type is text
  value,
  onChange,
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
      placeholder={placeholder}
      disabled={disabled}
      className={`input ${className}`} // Add your own classes if needed
      name={name}
      required={required}
    />
  );
};

export default Input;
