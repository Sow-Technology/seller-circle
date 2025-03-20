import mongoose from "mongoose";
const { Schema } = mongoose;

const AuthSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
    },
    contentType: {
      type: String,
    },
    imageBase64: {
      type: String,
    },
    authType: {
      type: String,
      enum: ["admin", "editor"],
      required: true,
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Auth || mongoose.model("Auth", AuthSchema);
