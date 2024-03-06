import { configureStore } from "@reduxjs/toolkit";

import { persistStore } from "redux-persist";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { medicinesReducer } from "./medicines/slice";
import { authReducer } from "./auth/slice";
// import { favoriteReducer } from "./favorites/slice";
import { ordersReducer } from "./order/slice";

export const store = configureStore({
  devTools: true,
  reducer: {
    auth: authReducer,
    medicines: medicinesReducer,
    // favorite: favoriteReducer,
    orders: ordersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
