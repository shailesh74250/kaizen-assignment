import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserProps } from './userProps';
import { API_URL } from '../utils/constants';

// Fetch all users
export const fetchUsers = createAsyncThunk<UserProps[], void>(
  'users/fetchUsers',
  async () => {
    const response = await axios.get(API_URL);
    return response.data.users; 
  }
);

// Search users by name
export const searchUser = createAsyncThunk<UserProps[], string>(
  'users/searchUser',
  async (name: string) => {
    const response = await axios.get(`${API_URL}/search?q=${name}`);
    return response.data.users;
  }
);

// Get a single user by ID
export const getSingleUser = createAsyncThunk<UserProps, string | undefined>(
  'users/getSingleUser',
  async (id?: string) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data
  }
);