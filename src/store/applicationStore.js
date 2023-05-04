import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  lang: "en",
};

export const appSlice = createSlice({
  name: "applicationStore",
  initialState,
  reducers: {
    SET_APP_DATA: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { SET_APP_DATA } = appSlice.actions;

export default appSlice.reducer;
