require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./Mongoose");
const router = require("./router");

const app = express();

connectDB();

const PORT = process.env.PORT || 3445;
app.use(cors());
app.use(express.json());
app.use("/api", router);

const server = app.listen(PORT, () => {
  console.log(`server is listening to port ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`logged error: ${err}`);
  server.close(() => {
    process.exit(1);
  });
});
