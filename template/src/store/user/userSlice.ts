import { createSlice } from '@reduxjs/toolkit';
import * as thunk from './userThunk';

interface UserState {
  users: any; // Replace `any` with the actual user data type
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunk.getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(thunk.getUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(thunk.getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to fetch users';
    });
  },
});

export default userSlice.reducer;
