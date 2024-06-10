const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth");
const authMiddleware = require("./middlewares/auth");
const postRoutes = require("./routes/post");

dotenv.config();

const PORT = process.env.PORT;
const MongoDb = process.env.MONGODB_CONNECTION;

const app = express();

app.use(express.json());

mongoose
  .connect(MongoDb)
  .then(() => console.log("DB Connected successfully"))
  .catch((err) => console.log(err));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/posts", authMiddleware, postRoutes);

app.listen(PORT, () => console.log("Server is up and running on PORT " + PORT));
