import { createSlice } from "@reduxjs/toolkit";
import {
  getSources,
  addSource,
  editSource,
  deleteSource,
} from "./sources-operations";

const initialState = {
  sources: [],
  isLoading: false,
  error: false,
  isFetched: false,
};

const sourcesSlice = createSlice({
  name: "sources",
  initialState,
  reducers: {
    clearSources: (state, action) => {
      state.sources = [];
    },
  },
  extraReducers: {
    [getSources.pending](state, action) {
      state.isLoading = true;
      state.error = false;
      state.isFetched = false;
    },
    [getSources.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [getSources.fulfilled](state, action) {
      state.sources = [...action.payload];
      state.isLoading = false;
      state.isFetched = true;
    },
    [addSource.pending](state, action) {
      state.isLoading = true;
      state.error = false;
      state.isFetched = false;
    },
    [addSource.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [addSource.fulfilled](state, action) {
      state.sources = [...action.payload];
      state.isLoading = false;
      state.isFetched = true;
    },
    [editSource.pending](state, action) {
      state.isLoading = true;
      state.error = false;
      state.isFetched = false;
    },
    [editSource.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [editSource.fulfilled](state, action) {
      state.sources = [...action.payload];
      state.isLoading = false;
      state.isFetched = true;
    },
    [deleteSource.pending](state, action) {
      state.isLoading = true;
      state.error = false;
      state.isFetched = false;
    },
    [deleteSource.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [deleteSource.fulfilled](state, action) {
      state.sources = [...action.payload];
      state.isLoading = false;
      state.isFetched = true;
    },
  },
});

export const { clearSources } = sourcesSlice.actions;
export default sourcesSlice.reducer;
