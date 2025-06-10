import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: localStorage.getItem("loggedIn") === "true",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      localStorage.setItem("loggedIn", "true");
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("loggedIn");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
