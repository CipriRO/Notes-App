import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.models.users || mongoose.model("users", usersSchema);

export default Users;
