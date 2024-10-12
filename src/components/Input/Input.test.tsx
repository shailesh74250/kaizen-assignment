import { render, fireEvent, screen } from '@testing-library/react';
import Input from './Input';  // Adjust the path based on your folder structure

describe('Input Component', () => {
  // Test to check if the input renders with the correct value
  it('renders with the correct value', () => {
    render(<Input value="test" onChange={() => {}} />);
    screen.debug(); 
    const inputElement = screen.getByDisplayValue('test');
    expect(inputElement).toBeInTheDocument();
  });

  // Test to check if the placeholder renders correctly
  it('renders with the correct placeholder', () => {
    render(<Input placeholder="Enter text" value="" onChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
  });

  // Test to check if the input is disabled when the 'disabled' prop is true
  it('is disabled when the disabled prop is true', () => {
    render(<Input disabled={true} value="" onChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('');  // Same here
    expect(inputElement).toBeDisabled();
  });

  // Test to check if the input calls onChange function
  it('calls the onChange function when typing', () => {
    const mockOnChange = jest.fn();
    render(<Input value="" onChange={mockOnChange} />);
    const inputElement = screen.getByPlaceholderText('');  // Same here
    
    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  // Test to check if the input type is set to "text" by default
  it('has the correct default type (text)', () => {
    render(<Input value="" onChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('');  // Same here
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  // Test to check if the input can accept a different type (e.g., password)
  it('accepts a custom input type', () => {
    render(<Input type="password" value="" onChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('');  // Same here
    expect(inputElement).toHaveAttribute('type', 'password');
  });

  // Test to check if the input has the required attribute when passed
  it('is marked as required when the required prop is true', () => {
    render(<Input required={true} value="" onChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('');  // Same here
    expect(inputElement).toBeRequired();
  });

  // Test to check if the input className is applied correctly
  it('applies the provided className', () => {
    render(<Input className="custom-class" value="" onChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('');  // Same here
    expect(inputElement).toHaveClass('input custom-class');
  });
});
