// src/components/Users.tsx
import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { searchUser } from '../../store/userAction'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

const SearchUser: React.FC = () => {
  const [userName, setUserName] = useState('')
  const dispatch = useAppDispatch()
  const { loading, error } = useAppSelector((state) => state.users)

  if (error) {
    return <div>Error: {error}</div>
  }

  const handleOnClick = () => {
    dispatch(searchUser(userName))
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }

  return (
    <div className='search-container'>
      <Input 
        type='text' 
        placeholder='Search user by name' 
        value={userName} 
        onChange={handleOnChange} 
      />
      <Button label='Find' onClick={handleOnClick} disabled={loading} />
    </div>
  )
}

export default React.memo(SearchUser)
