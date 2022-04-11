import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: null,
  isOpen: false,
  targetId: null,
  folder: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.content = action.payload.content;
      state.isOpen = true;
      if (action.payload.targetId) state.targetId = action.payload.targetId;
      if (action.payload.folder) state.folder = action.payload.folder;
    },
    closeModal: (state, action) => {
      state.content = null;
      state.isOpen = false;
      state.targetId = null;
      state.folder = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
