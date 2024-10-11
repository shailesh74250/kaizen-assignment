// src/components/Users.tsx
// import './Use.scss'
import React, { useEffect } from 'react';
import { getSingleUser } from '../../store/userAction'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useParams } from 'react-router-dom'

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the user id from the URL
  const dispatch = useAppDispatch();
  const { user, loading, error } = useAppSelector((state) => state.users)

  useEffect(() => {
    dispatch(getSingleUser(id))
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <p>First Name: {user?.firstName}</p>
      <p>Last Name: {user?.lastName}</p>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
      <p>Company Name: {user?.company.name}</p>
      <p>Company Title: {user?.company.title}</p>
      <p>Company Department: {user?.company?.department}</p>
      <p>Company Address: {user?.company?.address?.address}</p>
    </>
  );
};

export default UserDetails
