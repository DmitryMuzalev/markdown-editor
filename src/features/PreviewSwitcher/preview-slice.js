import { createSlice } from '@reduxjs/toolkit';

const previewSlice = createSlice({
  name: 'showPreview',
  initialState: false,
  reducers: {
    toggleShowPreview: (state) => !state,
  },
});

export const { toggleShowPreview } = previewSlice.actions;
export const previewReducer = previewSlice.reducer;
