import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = `http://localhost:3001`;

export const getAllMedicines = createAsyncThunk(
  "articles/getAllMedicines",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/", {});

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
      const response = await axios.get(`/${type}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
