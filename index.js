const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const chefInfo = require("./data/chefInfo .json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Chinese FoodHunt");
});

app.get("/chefInfo", (req, res) => {
  res.send(chefInfo);
});

app.get("/chefInfo/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);

 
    const selectedChef = chefInfo.find((n) => n.id === id);
    res.send(selectedChef);
  
});

app.listen(port, () => {
  console.log(`Chinese Food API is running on port: ${port}`);
});
