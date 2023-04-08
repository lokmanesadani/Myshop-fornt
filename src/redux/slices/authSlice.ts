import { createSlice } from "@reduxjs/toolkit";
type User = {
  firstName: string;
  lastName: string;
  email: string;
  loginType: string;
  picture?: string;
  address?: string;
  phone?: string;
};
const initialState: { user?: User } = {
  user: undefined,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
