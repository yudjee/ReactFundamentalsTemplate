import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  name: "",
  email: "",
  token: localStorage.getItem("token"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, { payload }) => ({ ...payload, isAuth: true }),
    // setUserData: (state, { payload }) => ({
    // 	...payload,
    // 	role: '',
    // 	isAuth: true,
    // }),
    removeUserData: () => ({
      ...initialState,
      token: "",
    }),
  },
});

export const { setUserData, removeUserData } = userSlice.actions;

export default userSlice.reducer;
