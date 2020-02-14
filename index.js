const express = require("express");
const bodyParser = require("body-parser");
const { getSum, addValue } = require("./src/MetricController");
const app = express();

app.use(bodyParser.json());

app.get("/:key/sum", (req, res) => {
  res.send({ value: getSum(req.params.key) });
});

app.post("/:key", (req, res) => {
  addValue(req.params.key, req.body.value);
  res.send();
});

app.listen(3000, () => {
  console.log(
    "Server is running on port 3000, P.S - All rights belongs to Deep Consulting Solutions!"
  );
});
