import { createSlice } from "@reduxjs/toolkit";
import apiOperations from "./folders-operations";

const initialState = {
  folders: [],
  isLoading: false,
  error: false,
  isFetched: false,
};

const foldersSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {},
  extraReducers: {
    [apiOperations.getFolders.pending](state, action) {
      state.isLoading = true;
      state.error = false;
      state.isFetched = false;
    },
    [apiOperations.getFolders.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [apiOperations.getFolders.fulfilled](state, action) {
      state.folders = [...action.payload];
      state.isLoading = false;
      state.isFetched = true;
    },
    [apiOperations.addFolder.pending](state, action) {
      state.isLoading = true;
      state.error = false;
      state.isFetched = false;
    },
    [apiOperations.addFolder.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [apiOperations.addFolder.fulfilled](state, action) {
      state.folders = [...action.payload];
      state.isLoading = false;
      state.isFetched = true;
    },
    [apiOperations.deleteFolder.pending](state, action) {
      state.isLoading = true;
      state.error = false;
      state.isFetched = false;
    },
    [apiOperations.deleteFolder.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [apiOperations.deleteFolder.fulfilled](state, action) {
      state.folders = [...action.payload];
      state.isLoading = false;
      state.isFetched = true;
    },
    [apiOperations.editFolder.pending](state, action) {
      state.isLoading = true;
      state.error = false;
      state.isFetched = false;
    },
    [apiOperations.editFolder.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [apiOperations.editFolder.fulfilled](state, action) {
      state.folders = [...action.payload];
      state.isLoading = false;
      state.isFetched = true;
    },
  },
});
export default foldersSlice.reducer;
