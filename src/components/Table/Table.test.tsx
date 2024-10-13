import { render, fireEvent } from '@testing-library/react';
import Table from './Table'; 

// Mock the Loader component to avoid rendering the actual loader during tests
jest.mock('../Loader/Loader', () => () => <div>Loading...</div>);

// Mock data for tests
const columns = [
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
];

const data = [
  { name: 'John Doe', age: 25 },
  { name: 'Jane Doe', age: 28 },
];

// Mock loader and error data
const errorMessage = 'Something went wrong';

describe('Table Component', () => {
  
  it('renders the loader when isLoading is true', () => {
    const { getByText } = render(<Table data={[]} columns={columns} isLoading={true} onRowClick={jest.fn()} />);
    
    // Check if the loader is rendered
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders the error message when error is provided', () => {
    const { getByText } = render(<Table data={[]} columns={columns} isLoading={false} error={errorMessage} onRowClick={jest.fn()} />);
    
    // Check if the error message is rendered
    expect(getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });

  it('renders the table with data when isLoading is false and no error', () => {
    const { getByText } = render(<Table data={data} columns={columns} isLoading={false} onRowClick={jest.fn()} />);
    
    // Check if the table headers are rendered
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Age')).toBeInTheDocument();
    
    // Check if the rows are rendered
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Jane Doe')).toBeInTheDocument();
  });

  it('renders the "No Data Found!" message when data is empty', () => {
    const { getByText } = render(<Table data={[]} columns={columns} isLoading={false} onRowClick={jest.fn()} />);
    
    // Check if the "No Data Found!" message is rendered
    expect(getByText('No Data Found!')).toBeInTheDocument();
  });

  it('calls onRowClick when a row is clicked', () => {
    const mockOnRowClick = jest.fn();
    
    const { getByText } = render(<Table data={data} columns={columns} isLoading={false} onRowClick={mockOnRowClick} />);
    
    // Click on a row
    fireEvent.click(getByText('John Doe'));
    
    // Check if onRowClick was called
    expect(mockOnRowClick).toHaveBeenCalledWith(data[0]);
  });
});
