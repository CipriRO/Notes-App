import mongoose, { Schema } from "mongoose";

const notesSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    statusText: { type: String, required: true },
    status: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const Notes = mongoose.models.notes || mongoose.model("notes", notesSchema);

export default Notes;
