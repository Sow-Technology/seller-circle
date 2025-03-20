import { configureStore } from "@reduxjs/toolkit";
import { blogReducer } from "./slices/BlogSlice";
import { adminLoginReducer } from "./slices/AuthSliceAdmin";
import { manageAdminReducer } from "./slices/ManageAdminSlice";
import { editorReducer } from "./slices/EditorSlice";
const store = configureStore({
  reducer: {
    blog: blogReducer,
    admin: adminLoginReducer,
    adminData: manageAdminReducer,
    editorData: editorReducer,
  },
});

export default store;
