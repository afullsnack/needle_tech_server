import mongoose from "mongoose";
import { connectDB } from "../lib/db";
let Enum;
try {
  connectDB();
  const EnumeratorSchema = new mongoose.Schema({
    firstname: { type: String, required: [true, "Please add first name"] },
    lastname: { type: String, required: [true, "Please add last name"] },
    phone: {
      type: String,
      required: [true, "Please add a valid phone number"],
    },
    password: { type: String, required: [true, "Please add a password"] },
    email: {
      type: String,
      required: [true, "Please add a valid email account"],
    },
    profilePic: { type: String, required: false },
    is_admin: { type: Boolean, default: false },
  });
  Enum = mongoose.models.Enum || mongoose.model("Enumerator", EnumeratorSchema);
} catch (err) {
  console.log(err.message || err.toString());
}

export default Enum;
