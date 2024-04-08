const express = require("express");
const app = express();
const PORT = 3000;

app.get("/send-data", (req, res) => {
  const { name, password } = req.params;
  if (!name || !password) {
    res.status(400).send("Please provide both name and password");
    return;
  }

  res.status(200).send({ status: true, message: "Data received successfully" });
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
