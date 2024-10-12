export interface InputProps {
  type?: string;              
  value: string;              
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;      
  disabled?: boolean;        
  className?: string;         
  name?: string;              
  required?: boolean;
}