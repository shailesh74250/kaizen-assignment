export interface InputProps {
  className?: string;         
  disabled?: boolean;        
  name?: string;              
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;      
  required?: boolean;
  testId?: string;
  type?: string;              
  value: string;              
}