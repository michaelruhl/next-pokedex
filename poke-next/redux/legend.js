import { createSlice } from "@reduxjs/toolkit";

export const legendSlice = createSlice({
  name: "legend",
  initialState: {
    legend: false,
    
  },
  reducers: {
    onlegend: (state, action) => {
      state.legend = !state.legend;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { onlegend } =
  legendSlice.actions;

export default legendSlice.reducer;
