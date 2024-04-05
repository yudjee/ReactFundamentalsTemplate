import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, { payload }) => [...state, ...payload],
    saveCourse: (state, { payload }) => [...state, payload],
    deleteCourse: (state, { payload }) =>
      state.filter((item) => item.id !== payload),
    updateCourse: (state, { payload }) =>
      state.map((item) => (item.id === payload.id ? payload : item)),
  },
});

export const { setCourses, saveCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;

export default coursesSlice.reducer;
