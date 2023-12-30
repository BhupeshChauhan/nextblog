import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: String,
    image: String,
    bio: String,
  },
  { timestamps: true },
);

const User = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
