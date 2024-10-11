import { createSlice } from '@reduxjs/toolkit';
import { searchUser, fetchUsers, getSingleUser } from './userAction';
import { UserState } from './userType';

// Initial state
const initialState: UserState = {
  users: [],
  user: null,
  loading: false,
  error: null,
};

const userReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {}, // You can add synchronous reducers here if needed
  extraReducers: (builder) => {
    // Fetch all users
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });

    // Search users by name
    builder
      .addCase(searchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
      })
      .addCase(searchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to search users';
      });

    // Get a single user by ID
    builder
      .addCase(getSingleUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getSingleUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch user';
      });
  },
});

export default userReducer.reducer;
