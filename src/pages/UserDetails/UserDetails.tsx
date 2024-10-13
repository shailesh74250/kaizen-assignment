import Loader from '../../components/Loader/Loader';
import React, { useEffect } from 'react';
import styles from './UserDetails.module.scss';
import globalStyles from '../../main.module.scss';
import { getSingleUser } from '../../store/userAction';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useParams } from 'react-router-dom';
import { USER_DETAILS } from '../../utils/constants';
import { Notify } from '../../components/Notify/Notify';

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { user, loading, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, [id, dispatch]);

  if (loading) {
    return (
      <div className={globalStyles.loader}>
        <Loader size="small" color="#3498db" />
      </div>
    );
  };

  if (error) {
    Notify(error, 'error');
  };

  if (!user) {
    return <div>No user found.</div>;
  };

  const { firstName, lastName, email, phone, company } = user;
  const { name: companyName, title: companyTitle, department: companyDepartment, address } = company || {};
  const { address: companyAddress, city, state, country, postalCode } = address || {};

  // Memoize user details for potential re-renders
  const details = [
    { label: 'First Name', value: firstName },
    { label: 'Last Name', value: lastName },
    { label: 'Email', value: email },
    { label: 'Phone', value: phone },
    { label: 'Company Name', value: companyName },
    { label: 'Company Title', value: companyTitle },
    { label: 'Company Department', value: companyDepartment },
    {
      label: 'Company Address',
      value: `${companyAddress}, ${city}, ${state}, ${country} - ${postalCode}`
    }
  ];

  return (
    <div className={styles['detail-container']}>
      <h2>{USER_DETAILS}</h2>
      {details.map(({ label, value }) => (
        <p key={label}>
          <strong>{label}:</strong> {value}
        </p>
      ))}
    </div>
  );
};

export default UserDetails;
