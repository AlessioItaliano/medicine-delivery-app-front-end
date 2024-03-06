import { createSlice } from "@reduxjs/toolkit";

import { getCoupons } from "./operation";

const initialState = {
  coupons: [],
  isLoading: false,
  error: null,
};

export const couponsSlice = createSlice({
  name: "coupons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoupons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoupons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.coupons = action.payload;
      })
      .addCase(getCoupons.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const couponsReducer = couponsSlice.reducer;
