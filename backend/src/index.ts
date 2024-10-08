import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import "./db/db";

import { authenticate } from "./auth/infrastructure/middleware/authenticate.middleware";

import noteRouter from "./note/infrastructure/controllers/note.controller";
import authRouter from "./auth/infrastructure/controllers/auth.controller";
import userRouter from "./user/infrastructure/controllers/user.controller";

dotenv.config();

const app = express();
const HOST = "localhost";
const frontendIP = "http://" + HOST + ":3000";

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: frontendIP,
    credentials: true,
  })
);

app.use(express.static("public"));

const PORT = process.env.PORT;

app.use("/writeNote/api/v1", authRouter);
app.use("/writeNote/api/v1", authenticate, noteRouter);
app.use("/writeNote/api/v1", authenticate, userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
