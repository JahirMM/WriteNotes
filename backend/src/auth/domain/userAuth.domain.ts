import { UserAuthInterface } from "./interfaces/userAuth.interfaces.interface";
import { v4 as uuidv4 } from "uuid";
import mongoose from "mongoose";

export const authUserSchema = new mongoose.Schema<UserAuthInterface>({
  userId: { type: String, default: uuidv4, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  middleName: String,
  lastName: { type: String, required: true },
  maternalLastName: { type: String, required: true },
  profilePicture: { type: String || null },
});

export const AuthUser = mongoose.model<UserAuthInterface>(
  "User",
  authUserSchema,
  "users"
);
