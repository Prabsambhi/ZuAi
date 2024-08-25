const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./Config/db");

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build-output')));

const postRoutes = require("./Routes/postRoutes");

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build-output', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
