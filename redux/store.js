import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./features/notes-slice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});
