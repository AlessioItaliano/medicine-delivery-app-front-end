import axios from "axios";

import { Notify } from "notiflix";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://medicine-delivery-app-back-end-1.onrender.com";

export const getCoupons = createAsyncThunk(
  "coupons/getCoupons",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/coupons", {});

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCouponById = createAsyncThunk(
  "coupons/getCouponById",
  async (couponId, thunkAPI) => {
    try {
      const response = await axios.get(`/coupons/${couponId}`);
      Notify.success("You have discount!");
      return response.data.discount;
    } catch (error) {
      Notify.failure("Something went wrong... Try again!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
