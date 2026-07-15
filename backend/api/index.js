const express = require("express");
const cors = require("cors");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://btn-five.vercel.app",
];

app.use(
  cors({
    origin(origin, callback) {
      // Allow requests with no origin (e.g. curl/Postman)
      if (!origin) {
        return callback(null, true);
      }

      // Allow localhost and production frontend
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Allow all Vercel preview deployments for this project
      if (
        origin.endsWith(".vercel.app") &&
        origin.includes("btn-")
      ) {
        return callback(null, true);
      }

      callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    credentials: true,
  })
);

app.get("/api/message", (req, res) => {
  res.json({
    text: "Hello from the Express server!",
  });
});

module.exports = app;