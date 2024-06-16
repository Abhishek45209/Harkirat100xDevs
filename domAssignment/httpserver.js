const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/si", function getsi(req, res) {
  const principal = parseInt(req.query.principal);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);

  const amount = principal + ((principal * rate) / 100) * time;
  res.send(amount.toString());
});

app.listen(3001);
