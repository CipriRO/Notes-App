import mongoose, { Schema } from "mongoose";

const notesSchema = new Schema(
  {
    title: String,
    content: String,
    statusText: String,
    status: Boolean,
    String,
    dateAndTime: String,
  },
  {
    timestamps: true,
  }
);

const Notes = mongoose.models.notes || mongoose.model("notes", notesSchema);

export default Notes;