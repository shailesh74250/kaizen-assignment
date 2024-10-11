// src/components/Users.tsx
import './Use.scss'
import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { fetchUsers } from '../../store/userAction'
import Table from '../../components/Table/Table'
import SearchUser from './searchUser'
import { useNavigate } from 'react-router-dom';

const column = [
  { Header: 'First Name', accessor: 'firstName' },
  { Header: 'Last Name', accessor: 'lastName' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Phone', accessor: 'phone' },
  { Header: 'Company Name', accessor: 'company.name' },
]

const Users: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (error) {
    return <div>Error: {error}</div>
  }
  
  const handleRowClick = (user: any) => {
    navigate(`/users/${user.id}`)
  };

  return (
    <>
      <SearchUser />
      <Table
        data={users}
        columns={column}
        onRowClick={handleRowClick}
        isLoading={loading}
      />
    </>
  );
};

export default Users
