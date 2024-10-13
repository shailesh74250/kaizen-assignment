import { UserProps } from "../../store/userProps";

export interface TableProps<T> {
  data: T[];
  columns: {
    Header: string;
    accessor: string;
  }[];
  onRowClick?: (row: UserProps) => void;
  isLoading?: boolean;
  error?: string;
  testId?: string;
}