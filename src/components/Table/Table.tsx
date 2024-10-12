import Loader from '../Loader/Loader';
import React from 'react';
import styles from './Table.module.scss';
import globalStyles from '../../main.module.scss';
import { TablePropsType } from './TableProps';
import { getNestedValue } from '../../utils/getNestedValue';
import { NO_DATA_FOUND } from '../../utils/constants';

const Table = <T,>({ data, columns, onRowClick, isLoading, error }: TablePropsType<T>) => {
  if (isLoading) {
    return <div className={globalStyles.loader}>
      <Loader size='small' color="#3498db" />
    </div>
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <table className={styles.table}>
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
        )) : 
          <tr>
            <td colSpan={columns.length} style={{ textAlign: 'center' }}>
              {NO_DATA_FOUND}
            </td>
          </tr>
        }
      </tbody>
    </table>
  );
};

export default React.memo(Table);
