import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import "./db/db";

import { authenticate } from "./auth/infrastructure/middleware/authenticate.middleware";

import noteRouter from "../src/note/infrastructure/controllers/note.controller";
import authRouter from "../src/auth/infrastructure/controllers/auth.controller";
import userRouter from "../src/user/infrastructure/controllers/user.controller";

dotenv.config();

const app = express();

// TODO: poner las cords luego para usarlos en el fronted
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const PORT = process.env.PORT;

app.use("/writeNote/api/v1", authRouter);
app.use("/writeNote/api/v1", authenticate, noteRouter);
app.use("/writeNote/api/v1", authenticate, userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
