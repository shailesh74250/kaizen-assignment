import { render } from '@testing-library/react';
import Loader from './index';  // Adjust the path if necessary

describe('Loader Component', () => {
  it('renders with default size and color', () => {
    const { container } = render(<Loader />);
    
    const loader = container.firstChild as HTMLDivElement;
    
    // Test for default size and color
    expect(loader).toHaveStyle({
      width: '40px',
      height: '40px',
      border: '4px solid #000',
      borderTop: '4px solid transparent',
    });
  });

  it('renders with small size when size prop is "small"', () => {
    const { container } = render(<Loader size="small" />);
    
    const loader = container.firstChild as HTMLDivElement;
    
    // Test for small size
    expect(loader).toHaveStyle({
      width: '20px',
      height: '20px',
    });
  });

  it('renders with large size when size prop is "large"', () => {
    const { container } = render(<Loader size="large" />);
    
    const loader = container.firstChild as HTMLDivElement;
    
    // Test for large size
    expect(loader).toHaveStyle({
      width: '60px',
      height: '60px',
    });
  });

  it('renders with a custom color when color prop is provided', () => {
    const { container } = render(<Loader color="#ff0000" />);
    
    const loader = container.firstChild as HTMLDivElement;
    
    // Test for custom color
    expect(loader).toHaveStyle({
      border: '4px solid #ff0000',
      borderTop: '4px solid transparent',
    });
  });

  it('falls back to default values when props are not provided', () => {
    const { container } = render(<Loader />);
    
    const loader = container.firstChild as HTMLDivElement;
    
    // Check default size and color
    expect(loader).toHaveStyle({
      width: '40px',
      height: '40px',
      border: '4px solid #000',
      borderTop: '4px solid transparent',
    });
  });
});
