export interface ButtonProps {
  onClick: () => void; 
  label: string;      
  disabled?: boolean;  
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset'; 
}