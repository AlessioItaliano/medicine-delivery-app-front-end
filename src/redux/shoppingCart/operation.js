import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API = axios.create({
  baseURL: `http://localhost:3001`,
});

export const getAllMedicines = createAsyncThunk(
  "articles/getAllMedicines",
  async (_, thunkAPI) => {
    try {
      const response = await API.get("/", {});

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getMedicinesByType = createAsyncThunk(
  "articles/getMedicinesByType",
  async (type, thunkAPI) => {
    try {
      const response = await API.get(`/${type}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
