import { render } from '@testing-library/react';
import Loader from './Loader';  // Adjust the path if necessary

describe('Loader Component', () => {
  it('renders with default size and color', () => {
    const { container } = render(<Loader />);
    const loader = container.firstChild as HTMLDivElement;
    expect(loader).toHaveClass('loader');
    expect(loader).toHaveClass('medium');
  });

  it('renders with small size when size prop is "small"', () => {
    const { container } = render(<Loader size="small" />);
    const loader = container.firstChild as HTMLDivElement;
    expect(loader).toHaveClass('small');
  });

  it('renders with large size when size prop is "large"', () => {
    const { container } = render(<Loader size="large" />);
    const loader = container.firstChild as HTMLDivElement;
    expect(loader).toHaveClass('large');
  });

  it('renders with a custom color when color prop is provided', () => {
    const { container } = render(<Loader color="#ff0000" />);  
    const loader = container.firstChild as HTMLDivElement;
    expect(loader).toHaveStyle('color: #ff0000');
  });
});
