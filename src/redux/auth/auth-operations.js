import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const logIn = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/auth/login", credentials);
    token.set(data.token);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue();
  }
});

const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    token.unset();
  } catch (error) {
    if (error.response.statusText === "Unauthorized") {
      window.location.reload();
    }
    return thunkAPI.rejectWithValue();
  }
});

const authOperations = {
  logIn,
  logOut,
};

export default authOperations;
