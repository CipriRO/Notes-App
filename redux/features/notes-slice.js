import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  status: "idle",
  error: false,
};

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
  try {
    const res = await fetch("../api/notes", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json();
  } catch {
    throw new Error("Unable to load the Notes. Retry?");
  }
});

export const deleteNotes = createAsyncThunk("notes/deleteNotes", async (id) => {
  try {
    await fetch("../api/notes", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });

    return id;
  } catch {
    throw new Error("Unable to delete the Note. Retry?");
  }
});

export const Notes = createSlice({
  name: "notes",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.rejected, (state, action) => {
        return { ...state, error: action.error.message };
      })
      .addCase(fetchNotes.pending, (state) => {
        return { ...state, status: "loading" };
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        return {
          ...state,
          notes: action.payload.notes,
          status: "idle",
        };
      })
      .addCase(deleteNotes.rejected, (state, action) => {
        return {
          ...state,
          error: action.error.message,
        };
      })
      .addCase(deleteNotes.fulfilled, (state, action) => {
        return {
          ...state,
          notes: state.notes.filter((note) => note._id !== action.payload.id),
        };
      });
  },
});

export default Notes.reducer;
export const { addNote, removeNote, modifyNote } = Notes.actions;
