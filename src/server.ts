import express from "express";
import path from "path";
import pool from "./db/db";

import studentRoutes from "./routes/studentRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

// PostgreSQL DB connection test
pool
  .connect()
  .then(() => console.log("✅ PostgreSQL connected"))
  .catch((err) => console.error("❌ PostgreSQL connection failed", err));

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", studentRoutes);

// Set view engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Test route
app.get("/", (req, res) => {
  res.send("🎓 Student Management System is running!");
});

// Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
