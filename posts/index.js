const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());

const posts = {};

app.get("/", (req, res) => {
  res.send(`Posts service is Working on port ${port}`);
});

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };
});

app.listen(port, () => {
  console.log(`Listening q on port ${port}`);
});
