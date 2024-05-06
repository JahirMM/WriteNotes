import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import "./db/db";

import { authenticate } from "./auth/infrastructure/middleware/authenticate.middleware";

import noteRouter from "../src/note/infrastructure/controllers/note.controller";
import authRouter from "../src/auth/infrastructure/controllers/auth.controller";

dotenv.config();

const app = express();

// TODO: poner las cords luego para usarlos en el fronted
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;

app.use("/writeNote/api/v1", authRouter);
app.use("/writeNote/api/v1", authenticate, noteRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
