import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API = axios.create({
  baseURL: `http://localhost:3001`,
});

export const getCoupons = createAsyncThunk(
  "coupons/getCoupons",
  async (_, thunkAPI) => {
    try {
      const response = await API.get("/coupons", {});

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
