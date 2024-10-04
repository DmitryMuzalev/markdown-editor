import { createSlice } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';
import { getUniqueName } from '../../helpers/getUniqueName';
import { getItem, setItem } from '../../helpers/localStorage';

const initialState = {
  documentsList: [],
  currentDocument: null,
};

const documentsSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {
    loadDocuments(state, action) {
      if (action.payload.length) {
        state.documentsList = action.payload;

        const id = getItem('currentDocumentID');
        if (id) {
          state.currentDocument = state.documentsList.find(
            (doc) => doc.id === id
          );
        } else {
          state.currentDocument = action.payload[0];
          setItem('currentDocumentID', action.payload[0].id);
        }
      }
    },
    createDocument(state) {
      const newDocument = {
        id: uuidv4(),
        name: getUniqueName(state.documentsList, 'Document.md'),
        content: '',
        createdAt: new Date().toLocaleDateString('en-GB'),
      };
      state.documentsList.push(newDocument);
      state.currentDocument = newDocument;
      setItem('currentDocumentID', newDocument.id);
    },
    selectDocument(state, action) {
      state.currentDocument = state.documentsList.find(
        (doc) => doc.id === action.payload
      );
      setItem('currentDocumentID', action.payload);
    },
    renameDocument(state, action) {
      state.currentDocument.name = action.payload;
    },
    updateContentDocument(state, action) {
      state.currentDocument.content = action.payload;
    },
    saveDocument(state) {
      const { id, name, content } = state.currentDocument;
      state.documentsList.map((doc) => {
        if (doc.id === id) {
          doc.name = name;
          doc.content = content;
          doc.createdAt = new Date().toLocaleDateString('en-GB');
        }
      });
    },
    deleteDocument(state) {
      if (state.documentsList.length) {
        state.documentsList = state.documentsList.filter(
          (doc) => doc.id !== state.currentDocument.id
        );
        state.currentDocument = state.documentsList[0] || null;
        setItem('currentDocumentID', state.currentDocument?.id || null);
      }
    },
  },
});

export const {
  loadDocuments,
  createDocument,
  selectDocument,
  renameDocument,
  updateContentDocument,
  saveDocument,
  deleteDocument,
} = documentsSlice.actions;
export const documentsReducer = documentsSlice.reducer;
