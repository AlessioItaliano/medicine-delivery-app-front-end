import { createSlice } from "@reduxjs/toolkit";

import { createOrder, getUserOrder } from "./operation";

const initialState = {
  orderHistory: [],
  isLoading: false,
  error: null,
};

export const orderHistorySlice = createSlice({
  name: "orderHistory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.orderHistory = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getUserOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.orderHistory = action.payload;
      })
      .addCase(getUserOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const orderHistoryReducer = orderHistorySlice.reducer;
