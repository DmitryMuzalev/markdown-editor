import { configureStore } from '@reduxjs/toolkit';

//_Reducers:
import { documentsReducer } from './features/Documents/documents-slice';
import { themeReducer } from './features/ThemSwitcher/theme-slice';
import { previewReducer } from './features/PreviewSwitcher/preview-slice';
import { sidebarReducer } from './features/SidebarSwitcher/sidebar-slice';
import { deleteMenuReducer } from './features/DeleteMenu/delete-menu-slice';

export const store = configureStore({
  reducer: {
    documents: documentsReducer,
    theme: themeReducer,
    showPreview: previewReducer,
    showSidebar: sidebarReducer,
    showDeleteMenu: deleteMenuReducer,
  },
  devTools: true,
});
