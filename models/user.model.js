import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "Please fill a valid email address"],
      minLength: 5,
      maxLength: 100,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: 6,
      select: false, // hides password in queries
    }
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
