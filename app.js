// Convert .env to ENV variable
const { config } = require("dotenv");
config();

const express = require("express");

// Logger
const morgan = require("morgan");

// Initialize Express app.
const app = express();

const api = require("./api");

app.set("port", process.env.PORT || 3000);

// Express.js basic middlewares
app.use(
  express.json(),
  express.urlencoded({
    extended: false,
  }),
  morgan("common")
);

// Request Handler
app.use("/api", api);

// Error Handler
app.use((err, req, res, next) => {
  return res.status(500).send({
    message: err.message,
  });
});

// Initialize Server
app.listen(app.get("port"), () => {
  console.log(`Listening on port ${app.get("port")}`);
});
