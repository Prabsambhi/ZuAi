const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./Config/db");

app.use(cors());
app.use(express.json());

dotenv.config();
connectDB();

const postRoutes = require("./Routes/postRoutes");

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Home Page");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
