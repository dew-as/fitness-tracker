import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload.user;
      localStorage.setItem("fittrack-app-token", action.payload.token);
      console.log(action.payload.user)
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("fitttrack-app-token");
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
