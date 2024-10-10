// src/components/Users.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/userReducer';
import { RootState } from '../../store/store';
import Table from '../../components/Table/Table';
import Input from '../../components/Input/Input';

const column = [
  { Header: 'First Name', accessor: 'firstName' },
  { Header: 'Last Name', accessor: 'lastName' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Phone', accessor: 'phone' },
  { Header: 'Company Name', accessor: 'company.name' },
]

const Users: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state: RootState) => state.users); // Access user data from the store

  useEffect(() => {
    dispatch(fetchUsers()); // Fetch users when the component mounts
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleRowClick = (user: any) => {
    alert(`User clicked: ${user.name}`);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }

  return (
    <>
      <Input type='text' value={searchQuery} onChange={handleOnChange} />
      <Table
        data={users}
        columns={column}
        onRowClick={handleRowClick}
        isLoading={loading}
      />
    </>
  );
};

export default Users;
