// Define the type for the table props
export interface TablePropsType<T> {
    data: T[];
    columns: {
      Header: string;
      accessor: string; // Accessor can be a key of the data type
    }[];
    onRowClick?: (row: T) => void;
    isLoading?: boolean;
    error?: string;
  }