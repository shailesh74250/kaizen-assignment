import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button.tsx';

describe('Button Component', () => {
  it('renders with correct label', () => {
    const label = 'Click Me';
    render(<Button onClick={() => {}} label={label} />);
    
    const buttonElement = screen.getByText(label);
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const onClick = jest.fn();
    const label = 'Click Me';
    render(<Button onClick={onClick} label={label} />);
    
    const buttonElement = screen.getByText(label);
    fireEvent.click(buttonElement);
    
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    const label = 'Click Me';
    render(<Button onClick={() => {}} label={label} disabled />);
    
    const buttonElement = screen.getByText(label);
    expect(buttonElement).toBeDisabled();
  });

  it('applies the correct className', () => {
    const label = 'Click Me';
    const className = 'custom-class';
    render(<Button onClick={() => {}} label={label} className={className} />);
    
    const buttonElement = screen.getByText(label);
    expect(buttonElement).toHaveClass('btn');
    expect(buttonElement).toHaveClass('custom-class');
  });

  it('renders with correct type', () => {
    const label = 'Submit';
    render(<Button onClick={() => {}} label={label} type="submit" />);
    
    const buttonElement = screen.getByText(label);
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });
});
