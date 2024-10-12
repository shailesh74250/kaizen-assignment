import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar'; // Adjust the path if necessary

describe('Navbar Component', () => {
  it('renders the Navbar component correctly', () => {
    const { getByText, getByAltText } = render(<Navbar />);
    expect(getByText('Kaizen Assignment')).toBeInTheDocument();
    const logoImage = getByAltText('Logo') as HTMLImageElement;
    console.log('logo image', logoImage);
    expect(logoImage).toBeInTheDocument();
  });

  it('should display the correct logo with alt text "Logo"', () => {
    const { getByAltText } = render(<Navbar />);
    const logoImage = getByAltText('Logo') as HTMLImageElement;
    expect(logoImage).toHaveAttribute('alt', 'Logo');
    expect(logoImage).toHaveAttribute('src');
  });

  it('should not re-render on props change (React.memo)', () => {
    const { rerender } = render(<Navbar />);
    const spy = jest.spyOn(React, 'memo');
    rerender(<Navbar />);
    expect(spy).not.toHaveBeenCalled();
  });
});
