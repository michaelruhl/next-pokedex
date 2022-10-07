import { createSlice } from "@reduxjs/toolkit";

export const evosSlice = createSlice({
  name: "evos",
  initialState: {
    evos: '',
    evos2: '',
  },
  reducers: {
    onEvos: (state, action) => {
      state.evos = action.payload;
    },
    onEvos2: (state, action) => {
        state.evos2 = action.payload;
      },
  },
});

// Action creators are generated for each case reducer function
export const { onEvos, onEvos2 } =
  evosSlice.actions;

export default evosSlice.reducer;