export interface ButtonProps {
  onClick: () => void; 
  label: string;      
  disabled?: boolean;  
  className?: string;  
  type?: 'button' | 'submit' | 'reset'; 
}