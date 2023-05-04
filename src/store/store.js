import { configureStore } from "@reduxjs/toolkit";
import applicationStore from "./applicationStore";

export const store = configureStore({
  reducer: {
    applicationStore,
  },
});
