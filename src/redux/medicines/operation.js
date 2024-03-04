import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API = axios.create({
  baseURL: `http://localhost:3001`,
});

export const getAllMedicines = createAsyncThunk(
  "medicines/getAllMedicines",
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
  "medicines/getMedicinesByType",
  async (type, thunkAPI) => {
    try {
      const response = await API.get(`/type/${type}`);

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
      const response = await API.get(`/price/${priceDirection}`);

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
      const response = await API.get(`/name/${medicine}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
