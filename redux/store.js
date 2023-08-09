import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "@/redux/features/notes-slice";

export const store = configureStore({
  reducer: {
    notesReducer,
  },
});
