import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import React, { useState, useCallback } from 'react';
import styles from './UserList.module.scss';
import { searchUser } from '../../store/userAction';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Notify } from '../../components/Notify/Notify';

const SearchUser: React.FC = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.users);

  if (error) {
    return Notify(error, 'error');
  }

  const handleOnClick = () => {
    dispatch(searchUser(userName));
  }

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(event.target.value);
    },
    []
  );

  const handleOnKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        dispatch(searchUser(userName.trim()));
      }  
    },
    []
  );

  return (
    <div className={styles['search-container']}>
      <Input 
        type='text' 
        placeholder='Search user by name' 
        value={userName} 
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown} 
      />
      <Button 
        variant='secondary'
        disabled={loading} 
        label='Search' 
        onClick={handleOnClick} 
      />
    </div>
  );
};

export default React.memo(SearchUser);