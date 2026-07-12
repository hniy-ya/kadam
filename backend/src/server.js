import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoute from "./routes/auth.js";
import cookieParser from "cookie-parser";
import groupRoute from "./routes/group.js";
import cors from "cors"


const app = express();
dotenv.config();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}))
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/group", groupRoute);

app.listen(5000, () => {
    connectDB();
    console.log("server is running on port 5000");
});

