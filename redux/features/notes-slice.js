import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    title: "Lorem, ipsum.",
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt repellendus, error sint fugit rerum alias reiciendis? Velit iste, aspernatur facilis iure hic ducimus laborum distinctio aliquam voluptates reiciendis. Excepturi, nemo. Mollitia a, velit enim numquam provident, quasi fugit, dolorum incidunt sint animi architecto laboriosam eius quia rem necessitatibus voluptatibus cupiditate ab exercitationem praesentium! Iusto nisi laboriosam quis iure iste optio.`,
    statusText: "Not Synced",
    status: false,
    dateAndTime: "Today, 13:03",
  },
  {
    id: 1,
    title: "Lorem, ipsum.",
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt repellendus, error sint fugit rerum alias reiciendis? Velit iste, aspernatur facilis iure hic ducimus laborum distinctio aliquam voluptates reiciendis. Excepturi, nemo. Mollitia a, velit enim numquam provident, quasi fugit, dolorum incidunt sint animi architecto laboriosam eius quia rem necessitatibus voluptatibus cupiditate ab exercitationem praesentium! Iusto nisi laboriosam quis iure iste optio.`,
    statusText: "Synced",
    status: true,
    dateAndTime: "Yesterday, 13:03",
  },
  {
    id: 2,
    title: "Lorem, ipsum.",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officiis recusandae ut sapiente aperiam odit deleniti expedita vitae dolores perferendis. Quia doloribus harum natus, amet repudiandae reiciendis commodi labore eius.
    
    Et voluptate eveniet voluptatibus ratione placeat nemo ipsum provident nesciunt accusantium perspiciatis, incidunt alias molestiae, similique dolorum. Maxime sunt ea velit eius! Facilis odio, adipisci facere velit fuga placeat aut.`,
    statusText: "Syncing...",
    status: "neutral",
    dateAndTime: "",
  },
];

export const notes = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      return [...state, action.payload];
    },

    removeNote: (state, action) => {
      return state.filter((note) => note.id !== action.payload);
    },

    modifyNote: (state, action) => {
      return state.map((note) =>
        note.id !== action.payload.id ? note : { ...note, ...action.payload }
      );
    },

    fetchNotes: (state) => {
      return state;
    },
  },
});

export default notes.reducer;
export const { addNote, removeNote, fetchNotes } = notes.actions;
