import { createSlice } from "@reduxjs/toolkit";

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const initialState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { user, token } = action.payload;
      state.user = {
        ...user,
        token,
      };
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    register: (state, action) => {
      const { user, token } = action.payload;
      state.user = {
        ...user,
        token,
      };
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state, action) => {
      console.log(1);
      localStorage.removeItem("user");
    },
  },
});
export const { login, register, logout } = userSlice.actions;
export default userSlice.reducer;
