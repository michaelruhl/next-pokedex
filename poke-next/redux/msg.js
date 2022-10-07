import { createSlice } from "@reduxjs/toolkit";

export const msgSlice = createSlice({
  name: "msg",
  initialState: {
    msg: {}
   
  },
  reducers: {
    onMsg: (state, action) => {
      state.msg = action.payload;
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { onMsg } =
 msgSlice.actions;

export default msgSlice.reducer;