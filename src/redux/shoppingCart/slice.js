import { createSlice } from "@reduxjs/toolkit";

import { getAllMedicines, getMedicinesByType } from "./operation";

const initialState = {
  medicines: [],
  isLoading: false,
  error: null,
};
// ddddd
export const medicinesSlice = createSlice({
  name: "medicines",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMedicines.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllMedicines.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.medicines = action.payload;
      })
      .addCase(getAllMedicines.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getMedicinesByType.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMedicinesByType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.medicines = action.payload;
      })
      .addCase(getMedicinesByType.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const medicinesReducer = medicinesSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { getAllMedicines, getMedicinesByType } from "./operation";

// const initialState = {
//   medicines: [],
//   isLoading: false,
//   error: null,
// };

// export const medicinesSlice = createSlice({
//   name: "medicines",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAllMedicines.pending, getMedicinesByType.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(
//         getAllMedicines.fulfilled,
//         getMedicinesByType.fulfilled,
//         (state, action) => {
//           state.isLoading = false;
//           state.error = null;
//           state.medicines = action.payload;
//         }
//       )
//       .addCase(
//         getAllMedicines.rejected,
//         getMedicinesByType.rejected,
//         (state, action) => {
//           state.isLoading = false;
//           state.error = action.error.message;
//         }
//       );
//   },
// });

// export const medicinesReducer = medicinesSlice.reducer;
