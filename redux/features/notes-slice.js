import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  status: "idle",
  fetched: false,
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

    if (!res.ok) {
      throw new Error("Unable to load the Notes. Retry?");
    }

    return res.json();
  } catch {
    throw new Error("Unable to load the Notes. Retry?");
  }
});

export const createNote = createAsyncThunk("notes/createNote", async (note) => {
  try {
    const res = await fetch("../api/notes", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });

    if (!res.ok) {
      throw new Error("Unable to create the Note. Retry?");
    }

    const data = await res.json();
    const _id = data._id;
    return { ...note, _id, statusText: "Synced", status: true };
  } catch {
    throw new Error("Unable to create the Note. Retry?");
  }
});

export const saveNote = createAsyncThunk("notes/saveNote", async (data) => {
  try {
    const res = await fetch("../api/notes", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Unable to save the Note. Retry?");
    }

    return { ...data, statusText: "Synced", status: true };
  } catch {
    throw new Error("Unable to save the Note. Retry?");
  }
});

export const deleteNotes = createAsyncThunk("notes/deleteNotes", async (id) => {
  try {
    const res = await fetch("../api/notes", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });

    if (!res.ok) {
      throw new Error("Unable to delete the Note. Retry?");
    }

    return id;
  } catch {
    throw new Error("Unable to delete the Note. Retry?");
  }
});

export const Notes = createSlice({
  name: "notes",
  initialState,
  reducers: {
    closeError: (state) => {
      return {
        ...state,
        error: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.rejected, (state, action) => {
        return { ...state, error: action.error.message, status: "idle" };
      })
      .addCase(fetchNotes.pending, (state) => {
        return { ...state, status: "loading" };
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        return {
          ...state,
          notes: action.payload.notes,
          status: "idle",
          fetched: true,
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
      })
      .addCase(createNote.rejected, (state, action) => {
        return {
          ...state,
          error: action.error.message,
        };
      })
      .addCase(createNote.fulfilled, (state, action) => {
        return {
          ...state,
          notes: [action.payload, ...state.notes],
        };
      })
      .addCase(saveNote.rejected, (state, action) => {
        return {
          ...state,
          error: action.error.message,
        };
      })
      .addCase(saveNote.fulfilled, (state, action) => {
        return {
          ...state,
          notes: [
            action.payload,
            ...state.notes.filter((note) => note._id !== action.payload._id),
          ],
        };
      });
  },
});

export default Notes.reducer;
export const { closeError } = Notes.actions;
