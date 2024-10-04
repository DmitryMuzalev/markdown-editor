import { createSlice } from "@reduxjs/toolkit";

const deleteMenuSlice = createSlice({
  name: "showDeleteMenu",
  initialState: false,
  reducers: {
    toggleShowDeleteMenu: (state) => !state,
  },
});

export const { toggleShowDeleteMenu } = deleteMenuSlice.actions;
export const deleteMenuReducer = deleteMenuSlice.reducer;
