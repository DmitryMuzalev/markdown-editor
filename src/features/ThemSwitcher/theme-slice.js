import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../../helpers/localStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: getItem("theme") || "light",
  reducers: {
    toggleTheme: (state) => (state === "light" ? "dark" : "light"),
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
