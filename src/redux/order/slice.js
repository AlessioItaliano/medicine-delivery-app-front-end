import { createSlice } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "orders",
  storage,
};

const initialState = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addToOrders: (state, action) => {
      state.orders.push(action.payload);
    },
    removeFromOrders: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload.id
      );
    },
  },
});

export const { addToOrders, removeFromOrders } = ordersSlice.actions;

export const ordersReducer = persistReducer(persistConfig, ordersSlice.reducer);
