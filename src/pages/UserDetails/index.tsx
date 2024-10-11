import './UserDetails.scss'
import React, { useEffect } from 'react';
import { getSingleUser } from '../../store/userAction'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader';

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the user id from the URL
  const dispatch = useAppDispatch();
  const { user, loading, error } = useAppSelector((state) => state.users)

  useEffect(() => {
    dispatch(getSingleUser(id))
  }, [id]);

  if (loading) {
    return <div className='loader'>
      <Loader size='small' color="#3498db" />
    </div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className='detail-container'>
      {user && (
      <>
        <h2>User Details</h2>
        <p><strong>First Name:</strong> {user?.firstName}</p>
        <p><strong>Last Name:</strong> {user?.lastName}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Phone:</strong> {user?.phone}</p>
        <p><strong>Company Name:</strong> {user?.company.name}</p>
        <p><strong>Company Title:</strong> {user?.company.title}</p>
        <p><strong>Company Department:</strong> {user?.company?.department}</p>
        <p>
          <strong>Company Address:</strong> {user?.company?.address?.address},&nbsp; 
          {user?.company?.address?.city},&nbsp;{user?.company?.address?.state},&nbsp; 
          {user?.company?.address?.country}-{user?.company?.address?.postalCode}
        </p>
      </>  
      )}
    </div>
  );
};

export default UserDetails
