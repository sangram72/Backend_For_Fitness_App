const express = require("express");
const cors = require("cors");
const foodData = require("./GET_API/Data");

const app = express();
const port = 3000;

app.use(cors()); 

app.get("/api/data", (req, res) => {
  res.json(foodData);
});


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
