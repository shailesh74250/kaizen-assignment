import React, { useCallback, useEffect, useMemo } from 'react';
import SearchUser from './UserSearch';
import Table from '../../components/Table/Table';
import styles from './UserList.module.scss';
import { fetchUsers } from '../../store/userAction';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useNavigate } from 'react-router-dom';
import { USER_LIST, USER_TABLE_COLUMN } from '../../utils/constants';
import { Notify } from '../../components/Notify/Notify';

const UserList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users);
  const navigate = useNavigate();
  const memoizedColumns = useMemo(() => USER_TABLE_COLUMN, []);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (error) {
    Notify(error, 'error');
  };

  const handleRowClick = useCallback(
    (user: any) => {
      navigate(`/users/${user.id}`);
    },
    []
  );

  return (
    <div className={styles['user-container']}>
      <h2>{USER_LIST}</h2>
      <SearchUser />
      <Table
        data={users}
        columns={memoizedColumns}
        onRowClick={handleRowClick}
        isLoading={loading}
      />
    </div>
  );
};

export default UserList;
