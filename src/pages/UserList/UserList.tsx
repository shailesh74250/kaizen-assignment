import React, { useEffect } from 'react';
import SearchUser from './SearchUser';
import Table from '../../components/Table/Table';
import styles from './UserList.module.scss';
import { fetchUsers } from '../../store/userAction';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useNavigate } from 'react-router-dom';
import { USER_LIST } from '../../utils/constants';

const column = [
  { Header: 'First Name', accessor: 'firstName' },
  { Header: 'Last Name', accessor: 'lastName' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Phone', accessor: 'phone' },
  { Header: 'Company Name', accessor: 'company.name' },
];

const UserList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  const handleRowClick = (user: any) => {
    navigate(`/users/${user.id}`);
  };

  return (
    <div className={styles['user-container']}>
      <h2>{USER_LIST}</h2>
      <SearchUser />
      <Table
        data={users}
        columns={column}
        onRowClick={handleRowClick}
        isLoading={loading}
      />
    </div>
  );
};

export default UserList;
