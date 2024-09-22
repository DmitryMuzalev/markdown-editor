import { createSlice } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';

const initialState = {
  documentsList: [],
  currentDocumentID: null,
};

const documentsSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {
    loadDocuments(state, action) {
      if (action.payload.length) {
        state.documentsList = action.payload;
        state.currentDocumentID = action.payload[0].id;
      }
    },
    createDocument(state) {
      const newDocument = {
        id: uuidv4(),
        name: 'Document.md',
        content: '',
        createdAt: new Date().toLocaleDateString('en-GB'),
      };
      state.documentsList.push(newDocument);
      state.currentDocumentID = newDocument.id;
    },
    selectDocument(state, action) {
      state.currentDocumentID = action.payload;
    },
  },
});

export const { loadDocuments, createDocument, selectDocument } =
  documentsSlice.actions;
export const documentsReducer = documentsSlice.reducer;
