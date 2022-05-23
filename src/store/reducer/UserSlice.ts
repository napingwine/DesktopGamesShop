import { createSlice } from '@reduxjs/toolkit';
import { IUser } from './../../models/IUser';
interface userState {
  users: IUser[];
  isLoading: boolean;
  error: string
}

const initialState: userState ={
  users: [],
  isLoading: false,
  error: ''
}

export const userSlicer = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export default userSlicer.reducer;