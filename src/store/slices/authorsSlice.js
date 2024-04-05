import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    setAuthors: (state, { payload }) => payload,
    saveAuthor: (state, { payload }) => [...state, payload],
  },
});

export const { setAuthors, saveAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;
