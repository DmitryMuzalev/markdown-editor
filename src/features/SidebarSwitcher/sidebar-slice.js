import { createSlice } from '@reduxjs/toolkit';
import { createDocument, selectDocument } from '../Documents/documents-slice';

const sidebarSlice = createSlice({
  name: 'showSidebar',
  initialState: false,
  reducers: {
    toggleShowSidebar: (state) => !state,
  },
  extraReducers: (builder) => {
    builder
      .addCase(selectDocument, () => false)
      .addCase(createDocument, () => false);
  },
});

export const { toggleShowSidebar } = sidebarSlice.actions;
export const sidebarReducer = sidebarSlice.reducer;
