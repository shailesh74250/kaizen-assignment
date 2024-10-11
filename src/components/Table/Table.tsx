import './Table.scss';
import Loader from '../Loader';
import React from 'react';
import { TablePropsType } from './TableType';
import { getNestedValue } from '../../utils/getNestedValue';

const Table = <T,>({ data, columns, onRowClick, isLoading, error }: TablePropsType<T>) => {
  if (isLoading) {
    return <div className='loader'>
      <Loader size='small' color="#3498db" />
    </div>
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
        {data.length > 0 ? data.map((row, rowIndex) => (
          <tr key={rowIndex} onClick={() => onRowClick && onRowClick(row)}>
            {columns.map((column) => (
              <td key={column.Header}>{String(getNestedValue(row, column.accessor))}</td>
            ))}
          </tr>
        )) : <p>No Data Found!</p>}
      </tbody>
    </table>
  );
};

export default React.memo(Table);
