import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = true;
    },
    unsetLoader: (state, action) => {
      state.isLoading = false;
    },
  },
  extraReducers: {
    [authOperations.logIn.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [authOperations.logIn.rejected](state, action) {
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.logOut.pending](state) {
      state.isLoading = true;
      state.error = false;
    },
    [authOperations.logOut.rejected](state) {
      state.isLoading = false;
      state.error = true;
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.fulfilled](state) {
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
  },
});

export const { setLoader, unsetLoader } = authSlice.actions;
export default authSlice.reducer;
