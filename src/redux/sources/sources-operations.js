import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
axios.defaults.baseURL = BASE_URL;

export const getSources = createAsyncThunk(
  "sources/getSources",
  async (name, thunkAPI) => {
    try {
      const { data } = await axios.post("/sources", { folder: name });
      return data.sources;
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const addSource = createAsyncThunk(
  "sources/addSource",
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.post(`/sources/new`, params);
      return data.sources;
    } catch (err) {
      if (err.response.statusText === "Unauthorized") {
        window.location.reload();
      }
      return thunkAPI.rejectWithValue();
    }
  }
);

export const deleteSource = createAsyncThunk(
  "sources/deleteSource",
  async (sourceId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/sources/${sourceId}`);
      return data.sources;
    } catch (err) {
      if (err.response.statusText === "Unauthorized") {
        window.location.reload();
      }
      return thunkAPI.rejectWithValue();
    }
  }
);

export const editSource = createAsyncThunk(
  "sources/editSource",
  async ({ id, ...params }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/sources/${id}`, params);
      return data.sources;
    } catch (error) {
      if (error.response.statusText === "Unauthorized") {
        window.location.reload();
      }
      return thunkAPI.rejectWithValue();
    }
  }
);

const sourcesOperations = { getSources, addSource, editSource, deleteSource };
export default sourcesOperations;
