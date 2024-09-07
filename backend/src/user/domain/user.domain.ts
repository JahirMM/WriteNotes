import { UserInterface } from "./interfaces/user.interface";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const userSchema = new mongoose.Schema<UserInterface>({
  userId: { type: String, default: uuidv4, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  middleName: String,
  lastName: { type: String, required: true },
  maternalLastName: { type: String, required: true },
  profilePicture: { type: String || null },
});

export const User = mongoose.model<UserInterface>("user", userSchema);
