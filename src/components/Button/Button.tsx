// src/components/Button.tsx
import './Button.scss'
interface ButtonProps {
  onClick: () => void; // Function to be called on button click
  label: string;       // Text to be displayed on the button
  disabled?: boolean;  // Optional prop to disable the button
  className?: string;  // Optional prop for additional CSS classes
  type?: 'button' | 'submit' | 'reset'; // Optional prop for button type
}

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
      className={`btn ${className}`} // Add your own classes if needed
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
