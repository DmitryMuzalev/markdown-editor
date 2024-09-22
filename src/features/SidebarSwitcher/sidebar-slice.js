import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'showSidebar',
  initialState: false,
  reducers: {
    toggleShowSidebar: (state) => !state,
  },
});

export const { toggleShowSidebar } = sidebarSlice.actions;
export const sidebarReducer = sidebarSlice.reducer;
