import { createSlice } from "@reduxjs/toolkit";

export const speechSlice = createSlice({
  name: "speech",
  initialState: {
    speech: true,
    
  },
  reducers: {
    onSpeech: (state, action) => {
      state.speech = !state.speech;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { onSpeech } =
  speechSlice.actions;

export default speechSlice.reducer;