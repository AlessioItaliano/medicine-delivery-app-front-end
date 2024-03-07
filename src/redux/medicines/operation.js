import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3001";

export const getAllMedicines = createAsyncThunk(
  "medicines/getAllMedicines",
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
  "medicines/getMedicinesByType",
  async (type, thunkAPI) => {
    try {
      const response = await axios.get(`/type/${type}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getMedicinesByPrice = createAsyncThunk(
  "medicines/getMedicinesByPrice",
  async (priceDirection, thunkAPI) => {
    try {
      const response = await axios.get(`/price/${priceDirection}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getMedicinesByName = createAsyncThunk(
  "medicines/getMedicinesByName",
  async ({ medicine }, thunkAPI) => {
    try {
      const response = await axios.get(`/name/${medicine}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
