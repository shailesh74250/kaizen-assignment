export interface TableProps<T> {
  data: T[];
  columns: {
    Header: string;
    accessor: string;
  }[];
  onRowClick?: (row: T) => void;
  isLoading?: boolean;
  error?: string;
}