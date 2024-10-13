import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Required to render Link components
import '@testing-library/jest-dom'; // for custom matchers like toHaveTextContent
import NotFound from './NotFound';
import { GO_BACK_HOME, PAGE_NOT_FOUND } from '../../utils/constants';

describe('NotFound Component', () => {
  test('should render the page not found message', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const notFoundMessage = screen.getByText(PAGE_NOT_FOUND);
    expect(notFoundMessage).toBeInTheDocument();
  });

  test('should render the go back home link', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const linkElement = screen.getByRole('link', { name: GO_BACK_HOME });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });

  test('should have correct styling class', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const containerDiv = screen.getByText(PAGE_NOT_FOUND).closest('div');
    expect(containerDiv).toHaveClass('not-found');
  });
});
