import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Clipverse backend running...");
});

// Example dummy route for auth
app.use("/api/auth", (req, res) => {
  res.json({ message: "Auth route placeholder" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));