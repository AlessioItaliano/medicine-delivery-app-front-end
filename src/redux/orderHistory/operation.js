import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3001";

export const createOrder = createAsyncThunk(
  "orderHistory/createOrder",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/orders", credentials);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getUserOrder = createAsyncThunk(
  "orderHistory/getUserOrder",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/orders/user");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
