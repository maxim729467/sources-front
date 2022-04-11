import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
axios.defaults.baseURL = BASE_URL;

const getFolders = createAsyncThunk(
  "folder/getFolders",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/folders");
      return data.folders;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const editFolder = createAsyncThunk(
  "folder/editFolder",
  async ({ folder, id }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/folders/${id}`, {
        name: folder,
      });
      return data.folders;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const addFolder = createAsyncThunk(
  "folder/addFolder",
  async ({ folder }, thunkAPI) => {
    try {
      const { data } = await axios.post("/folders", { name: folder });
      return data.folders;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const deleteFolder = createAsyncThunk(
  "folder/deleteFolder",
  async (folderId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/folders/${folderId}`);
      return data.folders;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const apiOperations = {
  getFolders,
  addFolder,
  editFolder,
  deleteFolder,
};
export default apiOperations;
