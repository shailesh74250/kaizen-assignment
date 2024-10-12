import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import React, { useState } from 'react';
import styles from './UserList.module.scss';
import { searchUser } from '../../store/userAction';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

const SearchUser: React.FC = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.users);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleOnClick = () => {
    dispatch(searchUser(userName));
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(searchUser(userName));
    }    
  }

  return (
    <div className={styles['search-container']}>
      <Input 
        type='text' 
        placeholder='Search user by name' 
        value={userName} 
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown} 
      />
      <Button label='Find' onClick={handleOnClick} disabled={loading} />
    </div>
  );
};

export default React.memo(SearchUser);