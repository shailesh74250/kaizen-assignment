import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import { UserType } from './userType'

// Fetch all users
export const fetchUsers = createAsyncThunk<UserType[], void>(
  'users/fetchUsers',
  async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await axios.get(apiUrl);
    return response.data; 
  }
);

// Search users by name
export const searchUser = createAsyncThunk<UserType[], string>(
  'users/searchUser',
  async (name: string) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await axios.get(`${apiUrl}/search?q=${name}`);
    return response.data;
  }
);

// Get a single user by ID
export const getSingleUser = createAsyncThunk<UserType, string | undefined>(
  'users/getSingleUser',
  async (id?: string) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await axios.get(`${apiUrl}/${id}`);
    console.log('user response', response.data)
    return response.data
  }
);
