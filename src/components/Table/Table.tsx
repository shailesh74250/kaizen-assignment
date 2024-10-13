import Loader from '../Loader/Loader';
import React from 'react';
import styles from './Table.module.scss';
import globalStyles from '../../main.module.scss';
import { TableProps } from './TableProps';
import { getNestedValue } from '../../utils/getNestedValue';
import { NO_DATA_FOUND } from '../../utils/constants';

const Table = <T,>({ data, columns, onRowClick, isLoading, error, testId }: TableProps<T>) => {
  if (isLoading) {
    return (
      <div className={globalStyles.loader}>
        <Loader size="small" color="#3498db" />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className={styles.noData}>
        <p>{NO_DATA_FOUND}</p>
      </div>
    );
  }

  return (
    <table className={styles.table} data-testid={testId || 'table'}>
      <thead>
        <tr data-testid={testId || 'table-header'}>
          {columns.map((column) => (
            <th key={column.Header} data-testid={testId || `${column.Header}-th`}>
              {column.Header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            onClick={() => onRowClick?.(row)}
            data-testid={testId || `${rowIndex}-row`}
          >
            {columns.map((column) => (
              <td key={column.Header} data-testid={testId || `${rowIndex}-${column.Header}`}>
                {String(getNestedValue(row, column.accessor))}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default React.memo(Table);