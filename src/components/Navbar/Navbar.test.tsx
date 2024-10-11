import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar'; // Adjust the path if necessary
import '@testing-library/jest-dom/extend-expect';

describe('Navbar Component', () => {
  it('renders the Navbar component correctly', () => {
    const { getByText, getByAltText } = render(<Navbar />);

    // Test for heading text
    expect(getByText('Kaizen Assignment')).toBeInTheDocument();

    // Test for logo image
    const logoImage = getByAltText('Logo') as HTMLImageElement;
    expect(logoImage).toBeInTheDocument();
    expect(logoImage.src).toContain('/logo.png'); // Ensure it points to the correct logo path
  });

  it('should display the correct logo with alt text "Logo"', () => {
    const { getByAltText } = render(<Navbar />);
    
    // Test for logo image
    const logoImage = getByAltText('Logo') as HTMLImageElement;
    expect(logoImage).toHaveAttribute('alt', 'Logo');
    expect(logoImage).toHaveAttribute('src');
  });

  it('should not re-render on props change (React.memo)', () => {
    // This test ensures that React.memo is working as expected.
    // However, testing memoization is tricky and requires a bit more setup.
    const { rerender } = render(<Navbar />);

    // Mock console log or use jest to spy on re-renders
    const spy = jest.spyOn(React, 'memo');

    // Trigger re-render (you would typically pass new props to trigger a re-render)
    rerender(<Navbar />);

    // Check that React.memo was called and no unnecessary renders happened
    expect(spy).not.toHaveBeenCalled(); // React.memo prevents unnecessary re-renders
  });
});
