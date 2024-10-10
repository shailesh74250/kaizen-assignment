// src/components/Table.tsx
import './Table.scss';
import React from 'react';

// Define the type for the table props
interface TableProps<T> {
  data: T[];
  columns: {
    Header: string;
    accessor: string; // Accessor can be a key of the data type
  }[];
  onRowClick?: (row: T) => void;
  isLoading?: boolean;
  error?: string;
}

// Table Component
const Table = <T,>({ data, columns, onRowClick, isLoading, error }: TableProps<T>) => {
  // Render loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.Header}>{column.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} onClick={() => onRowClick && onRowClick(row)}>
            {columns.map((column) => (
              <td key={column.Header}>{String(row[column.accessor])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default React.memo(Table); // Memoize the component to optimize re-renders
