require("dotenv").config({ path: "./backend/.env" });

const { app, server } = require("./socket/socket");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/AuthRouts");
const path = require("path");
const fileUpload = require("express-fileupload");
const MessageRoutes = require("./routes/MessagesRoutes");
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 3000;
const _dirname = path.resolve();

app.use(
  cors({
    origin: ["http://localhost:5174", "http://localhost:5173"], // frontend URL
    credentials: true, // Allows cookies to be sent/received
  })
);

// middleware:
app.use(express.json()); // parses an incomming JSON object into JavaScript
app.use(fileUpload());

app.use(cookieParser());
app.use(express.static(path.join(_dirname, "/frontend/dist")));

// Routes:
app.use(authRoutes);
app.use(MessageRoutes);
app.use(userRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
// DB connection
const connectDB = require("./config/db");
server.listen(process.env.PORT, () =>
  console.log(`server is running on ${process.env.PORT}`)
);

connectDB();
